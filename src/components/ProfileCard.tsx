"use client";
import Image from "next/image";
import { UserInfoWrapper } from "./Card.styles";
import styled from "styled-components";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { COLORS, GRADIENTS } from "@/constants/CommonConstants";
import { useContext } from "react";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import { useRouter } from "next/navigation";

const ProfileImage = styled(Image)`
  width: 60px;
  height: 60px;
  padding: 10px;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 100px;
  background-color: white;
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
  color: white;
`;

const FollowButton = styled.div`
  width: 50%;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  font-weight: bold;
  color: white;
  background-color: ${COLORS.brightRed};
  border-radius: 10px;
  box-shadow: 0px 0px 7px -3px #000000;
`;

const ProfileCard = ({
  userName,
  connections,
  onConnectClick,
}: {
  userName: string;
  connections: Array<string>;
  onConnectClick: Function;
}) => {
  const router = useRouter();
  const { basicDetails } = useContext(BasicDetailsInterface);

  return (
    <UserInfoWrapper
      bggrad={GRADIENTS.redishPink}
      onClick={() => router.push(`/profile/${userName}`)}
    >
      <ProfileImage src={COMMON_IMAGES.userCircle} alt="" />
      <UserName>{userName}</UserName>
      {basicDetails?.userName !== userName &&
        !connections.includes(userName) && (
          <FollowButton onClick={(e) => onConnectClick(e, userName)}>
            Connect
          </FollowButton>
        )}
    </UserInfoWrapper>
  );
};

export default ProfileCard;
