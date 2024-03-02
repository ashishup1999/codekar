import React from "react";

const IndividualPlayGround = ({ params }: { params: { pgNo: string } }) => {
  return <div>Playground number {params.pgNo}</div>;
};

export default IndividualPlayGround;
