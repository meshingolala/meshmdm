import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import scriptsAPI from 'services/entities/scripts';
import { IHost } from 'interfaces/host';

const baseClass = 'host-terminal-tab';

interface IHostTerminalTabProps {
  host: IHost;
}

const HostTerminalTab = ({ host }: IHostTerminalTabProps) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const isExecutingRef = useRef(false);

  const commandRef = useRef<string>('');

  useEffect(() => {
    isExecutingRef.current = isExecuting;
  }, [isExecuting]);

  useEffect(() => {
    if (!terminalRef.current) return;

    const xterm = new Terminal({
      cursorBlink: true,
      theme: { background: '#1e1e1e' },
      fontFamily: 'Menlo, Monaco, Courier New, monospace',
    });

    const fitAddon = new FitAddon();
    xterm.loadAddon(fitAddon);
    
    xterm.open(terminalRef.current);
    fitAddon.fit();

    xterm.writeln('\x1b[1;32mConnected to ' + host.hostname + '\x1b[0m');
    xterm.writeln('\x1b[33mWeb-based Remote Terminal (Pseudo-TTY via Orbit)\x1b[0m');
    xterm.writeln('');
    
    const writePrompt = () => {
      xterm.write('\r\n\x1b[1;36m' + host.hostname + ' $\x1b[0m ');
    };

    writePrompt();

    xterm.onData(async (data) => {
      if (isExecutingRef.current) return;

      const code = data.charCodeAt(0);
      
      if (code === 13) {
        const cmd = commandRef.current.trim();
        commandRef.current = '';
        
        xterm.write('\r\n');
        if (!cmd) {
          writePrompt();
          return;
        }

        setIsExecuting(true);
        xterm.write('\x1b[90mRunning: ' + cmd + '\x1b[0m\r\n');

        try {
          let scriptContents = cmd;
          if (host.platform !== 'windows') {
             scriptContents = '#!/bin/sh\n' + cmd;
          }

          const response = await scriptsAPI.runScriptSync({
            host_id: host.id,
            script_contents: scriptContents,
          });
          
          if (response.output) {
             const lines = response.output.split('\n');
             lines.forEach((line: string) => {
                xterm.writeln(line.replace(/\r/g, ''));
             });
          }
          
          if (response.message) {
             xterm.writeln('\x1b[31m' + response.message + '\x1b[0m');
          }

        } catch (e: any) {
          xterm.writeln('\x1b[31mError: ' + (e.message || 'Failed to execute command.') + '\x1b[0m');
        } finally {
          setIsExecuting(false);
          writePrompt();
        }
      } 
      else if (code === 127) {
        if (commandRef.current.length > 0) {
          commandRef.current = commandRef.current.slice(0, -1);
          xterm.write('\b \b');
        }
      } 
      else if (code >= 32 && code <= 126) {
        commandRef.current += data;
        xterm.write(data);
      }
    });

    xtermRef.current = xterm;
    fitAddonRef.current = fitAddon;

    const resizeObserver = new ResizeObserver(() => {
      fitAddon.fit();
    });
    resizeObserver.observe(terminalRef.current);

    return () => {
      resizeObserver.disconnect();
      xterm.dispose();
    };
  }, [host.id, host.hostname, host.platform]);

  return (
    <div className={baseClass} style={{ height: '600px', width: '100%', padding: '16px', backgroundColor: '#1e1e1e', borderRadius: '8px', marginTop: '24px' }}>
      <div ref={terminalRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default HostTerminalTab;
