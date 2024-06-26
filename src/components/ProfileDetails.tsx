import { COMMON_IMAGES } from "@/constants/StaticImages";
import {
  ProfileImage,
  ProfileImageWrpr,
  ProfileInfoWrapper,
  TextInfos,
  UserFullName,
  UserName,
} from "./ProfileDetails.styles";

const ProfileDetails = ({
  userName,
  fullName,
  profileImg,
}: {
  userName: string;
  fullName: string;
  profileImg: string;
}) => {
  return (
    <ProfileInfoWrapper>
      <ProfileImageWrpr>
        <ProfileImage
          width={200}
          height={200}
          src={
            profileImg
              ? `data:image/jpeg;base64,${profileImg}`
              : COMMON_IMAGES.defaultProfileImg
          }
          alt=""
        />
      </ProfileImageWrpr>
      <TextInfos>
        <UserFullName>{fullName}</UserFullName>
        <UserName>{userName}</UserName>
      </TextInfos>
    </ProfileInfoWrapper>
  );
};

export default ProfileDetails;
