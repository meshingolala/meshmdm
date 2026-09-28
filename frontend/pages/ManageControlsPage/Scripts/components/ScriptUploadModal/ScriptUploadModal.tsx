import React, { useState } from "react";

import Button from "components/buttons/Button";
import Modal from "components/Modal";
import { notify } from "components/ToastNotification";
import scriptAPI from "services/entities/scripts";
import InputField from "components/forms/fields/InputField";

import ScriptUploader from "../ScriptUploader";

import { getErrorMessage } from "./helpers";

const baseClass = "script-upload-modal";

interface IScriptUploadModal {
  onExit: () => void;
  onSubmit: () => void;
  currentTeamId: number;
}

const ScriptUploadModal = ({
  onSubmit,
  onExit,
  currentTeamId,
}: IScriptUploadModal) => {
  const [activeTab, setActiveTab] = useState<"upload" | "ai">("upload");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showLoading, setShowLoading] = useState(false);

  // AI Script Assistant State
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedScript, setGeneratedScript] = useState<string | null>(null);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);

  const onUploadFile = async () => {
    if (!selectedFile) {
      return;
    }
    setShowLoading(true);
    try {
      await scriptAPI.uploadScript(selectedFile, currentTeamId);
      notify.success("Successfully uploaded script.");
      onSubmit();
    } catch (e) {
      notify.error(getErrorMessage(e), { response: e });
    } finally {
      setShowLoading(false);
    }
  };

  const handleGenerateAIScript = async () => {
    if (!aiPrompt.trim()) {
      notify.error("Please enter a description for the AI script generator.");
      return;
    }
    setIsGenerating(true);
    try {
      const resp = await scriptAPI.generateAIScript(aiPrompt);
      setGeneratedScript(resp.script);
      setAiExplanation(resp.explanation);
      notify.success("Mesh AI generated script successfully!");
    } catch (e: any) {
      notify.error(e?.message || "Failed to generate AI script.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApplyGeneratedScript = () => {
    if (!generatedScript) return;
    const blob = new Blob([generatedScript], { type: "text/plain" });
    const filename = `mesh_ai_${Date.now()}.sh`;
    const file = new File([blob], filename, { type: "text/plain" });
    setSelectedFile(file);
    setActiveTab("upload");
    notify.success(`Generated script loaded as ${filename}`);
  };

  const additionalInfo = (() => {
    if (!selectedFile) {
      return undefined;
    }
    if (selectedFile.name.match(/\.sh$/)) {
      return 'On macOS and Linux, script will run according to the interpreter specified in the first line: "#!/bin/sh", "#!/bin/zsh", or "#!/bin/bash"';
    }
    if (selectedFile.name.match(/\.py$/)) {
      return 'On macOS and Linux, Python scripts must start with a python shebang in the first line (for example, "#!/usr/bin/env python3" or "#!/usr/bin/python3").';
    }
    return undefined;
  })();

  return (
    <Modal
      title="Add script"
      onExit={onExit}
      onEnter={onSubmit}
      className={baseClass}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <Button
          variant={activeTab === "upload" ? "default" : "secondary"}
          onClick={() => setActiveTab("upload")}
          size="small"
        >
          Upload Script File
        </Button>
        <Button
          variant={activeTab === "ai" ? "default" : "secondary"}
          onClick={() => setActiveTab("ai")}
          size="small"
        >
          ✨ Generate with Mesh AI
        </Button>
      </div>

      {activeTab === "upload" ? (
        <>
          <div className={`${baseClass}__content`}>
            <ScriptUploader
              onFileSelected={(file) => setSelectedFile(file)}
              selectedFile={selectedFile}
              forModal
            />
          </div>
          {additionalInfo && (
            <p className={`${baseClass}__additional-info`}>{additionalInfo}</p>
          )}
          <div className="modal-cta-wrap">
            <Button
              onClick={onUploadFile}
              disabled={!selectedFile || showLoading}
              isLoading={showLoading}
            >
              Add script
            </Button>
          </div>
        </>
      ) : (
        <div className="ai-script-generator-pane" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <InputField
            label="What should this script do?"
            placeholder="e.g. Flush DNS cache, audit installed software, or clean temp storage..."
            value={aiPrompt}
            onChange={(val: string) => setAiPrompt(val)}
            helpText="Mesh AI sandbox strictly prevents destructive commands and generates optimized Bash or PowerShell scripts."
          />
          <Button
            onClick={handleGenerateAIScript}
            disabled={!aiPrompt.trim() || isGenerating}
            isLoading={isGenerating}
            variant="default"
          >
            Generate Script
          </Button>

          {generatedScript && (
            <div style={{ marginTop: "12px", background: "rgba(0,0,0,0.2)", padding: "12px", borderRadius: "6px", border: "1px solid var(--ui-vibrant-blue-50)" }}>
              <div style={{ fontWeight: 600, color: "var(--core-vibrant-blue)", marginBottom: "6px" }}>
                AI Safety Explanation:
              </div>
              <p style={{ fontSize: "12px", marginBottom: "8px", opacity: 0.9 }}>
                {aiExplanation}
              </p>
              <pre style={{ maxHeight: "160px", overflowY: "auto", background: "#111", padding: "8px", borderRadius: "4px", fontSize: "12px", color: "#a5d6ff" }}>
                {generatedScript}
              </pre>
              <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleApplyGeneratedScript} variant="default" size="small">
                  Use This Script
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ScriptUploadModal;
