import React from "react";

const IndividualPlayGround = ({ params }: { params: { projectNo: string } }) => {
  return <div>Project number {params.projectNo}</div>;
};

export default IndividualPlayGround;
