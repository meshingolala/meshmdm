import React from "react";

import FormField from "components/forms/FormField";

interface ITeamNameFieldProps {
  name: string;
}

const TeamNameField = ({ name }: ITeamNameFieldProps) => {
  return (
    <FormField label="Mesh" name="fleet_name">
      <p>{name}</p>
    </FormField>
  );
};

export default TeamNameField;
