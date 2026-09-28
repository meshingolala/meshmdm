import { render, screen } from "@testing-library/react";
import React from "react";

import fleetAvatar from "../../../../assets/images/mesh_mdm_logo.jpg";

import OrgLogoIcon from "./OrgLogoIcon";

describe("OrgLogoIcon - component", () => {
  it("renders the Mesh Logo by default", () => {
    render(<OrgLogoIcon />);

    // expect(component.state("imageSrc")).toEqual(fleetAvatar);
    expect(screen.getByRole("img")).toHaveAttribute("src", fleetAvatar);
  });

  it("renders the image source when it is valid", () => {
    render(<OrgLogoIcon src="/assets/images/avatar.svg" />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/assets/images/avatar.svg"
    );
  });
});
