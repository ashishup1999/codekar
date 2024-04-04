"use client";
import Image from "next/image";
import { UserInfoWrapper } from "./Card.styles";
import styled from "styled-components";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { GRADIENTS } from "@/constants/CommonConstants";
import { useRouter } from "next/navigation";
import { getBase64Src } from "@/utils/CommonUtils";

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  box-shadow: 0px 0px 7px -3px #000000;
  border-radius: 100px;
  background-color: white;
  overflow: hidden;
  border: 2px solid white;
`;

const ProfileImage = styled(Image)`
  height: 100%;
  width: fit-content;
  background-color: white;
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
  color: white;
`;

const ProfileCard = ({
  userName,
  profImg,
}: {
  userName: string;
  profImg: string;
}) => {
  const router = useRouter();

  return (
    <UserInfoWrapper
      bggrad={GRADIENTS.redishPink}
      onClick={() => router.push(`/profile/${userName}`)}
    >
      <ProfileImageWrapper>
        <ProfileImage
          width={200}
          height={200}
          src={profImg ? getBase64Src(profImg) : COMMON_IMAGES.defaultProfileImg}
          alt=""
        />
      </ProfileImageWrapper>
      <UserName>{userName}</UserName>
    </UserInfoWrapper>
  );
};

export default ProfileCard;
