import { COMMON_IMAGES } from "@/constants/StaticImages";
import {
  ProfileImage,
  ProfileInfoWrapper,
  TextInfos,
  UserFullName,
  UserName,
} from "./ProfileDetails.styles";

const ProfileDetails = () => {
  return (
    <ProfileInfoWrapper>
      <ProfileImage src={COMMON_IMAGES.userCircle} alt="" />
      <TextInfos>
        <UserFullName>Ashish Upadhyay</UserFullName>
        <UserName>@ashishup1999</UserName>
      </TextInfos>
    </ProfileInfoWrapper>
  );
};

export default ProfileDetails;
