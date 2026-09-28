import React from "react";

import ActivityItem from "components/ActivityItem";

import { IHostActivityItemComponentPropsWithShowDetails } from "../../ActivityConfig";

const baseClass = "installed-certificate-activity-item";

const InstalledCertificateActivityItem = ({
  activity,
  onShowDetails,
}: IHostActivityItemComponentPropsWithShowDetails) => {
  const isFailed = activity.details?.status === "failed_install";

  return (
    <ActivityItem
      className={baseClass}
      activity={activity}
      hideCancel
      hideShowDetails={!isFailed}
      onShowDetails={onShowDetails}
    >
      {isFailed ? (
        <>
          <b>Mesh</b> failed to install certificate{" "}
          <b>{activity.details?.certificate_name}</b> on this host.
        </>
      ) : (
        <>
          <b>Mesh</b> installed certificate{" "}
          <b>{activity.details?.certificate_name}</b> on this host.
        </>
      )}
    </ActivityItem>
  );
};

export default InstalledCertificateActivityItem;
