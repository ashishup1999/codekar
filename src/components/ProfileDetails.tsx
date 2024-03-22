import { COMMON_IMAGES } from "@/constants/StaticImages";
import {
  ProfileImage,
  ProfileInfoWrapper,
  TextInfos,
  UserFullName,
  UserName,
} from "./ProfileDetails.styles";

const ProfileDetails = ({
  userName,
  fullName,
}: {
  userName: string;
  fullName: string;
}) => {
  return (
    <ProfileInfoWrapper>
      <ProfileImage src={COMMON_IMAGES.userCircle} alt="" />
      <TextInfos>
        <UserFullName>{fullName}</UserFullName>
        <UserName>{userName}</UserName>
      </TextInfos>
    </ProfileInfoWrapper>
  );
};

export default ProfileDetails;
