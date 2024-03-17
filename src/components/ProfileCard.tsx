"use client";
import Image from "next/image";
import { PCMiniWrapper } from "./ProjectCard.styles";
import styled from "styled-components";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { HEADER_TO_GRADIENT } from "@/constants/CommonConstants";

const ProfileImage = styled(Image)`
  width: 60px;
  height: 60px;
  padding: 10px;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 100px;
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

const FollowButton = styled.div`
  width: 50%;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  font-weight: bold;
  color: white;
  background-image: ${HEADER_TO_GRADIENT.explore};
  border-radius: 10px;
`;

const ProfileCard = ({
  userName,
}: {
  profileImg: string;
  userName: string;
}) => {
  return (
    <PCMiniWrapper>
      <ProfileImage src={COMMON_IMAGES.userCircle} alt="" />
      <UserName>{userName}</UserName>
      <FollowButton>Follow</FollowButton>
    </PCMiniWrapper>
  );
};

export default ProfileCard;
