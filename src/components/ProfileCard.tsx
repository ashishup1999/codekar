"use client";
import Image from "next/image";
import { UserInfoWrapper } from "./Card.styles";
import styled from "styled-components";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { GRADIENTS } from "@/constants/CommonConstants";
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

const ProfileCard = ({ userName }: { userName: string }) => {
  const router = useRouter();

  return (
    <UserInfoWrapper
      bggrad={GRADIENTS.redishPink}
      onClick={() => router.push(`/profile/${userName}`)}
    >
      <ProfileImage src={COMMON_IMAGES.userCircle} alt="" />
      <UserName>{userName}</UserName>
    </UserInfoWrapper>
  );
};

export default ProfileCard;
