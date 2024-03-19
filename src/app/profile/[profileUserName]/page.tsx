"use client";
import { useContext } from "react";
import {
  HomeWrapper,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  LogoImg,
} from "@/app/page.styles";
import { COMMON_TEXTS, GRADIENTS } from "@/constants/CommonConstants";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import {
  Icon,
  IconSection,
  ProfileDiv,
  ProfileWrapper,
  VisitOptions,
  VisitSections,
} from "./Profile.styles";
import ProfileDetails from "@/components/ProfileDetails";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import useProfile from "@/hooks/useProfile";

const Profile = ({ params }: { params: { profileUserName: string } }) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const { logOut } = useProfile();

  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <HeaderTextSpan>
            <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
            <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
          </HeaderTextSpan>
        </HeaderDiv>
        <ProfileWrapper>
          <ProfileDiv>
            <ProfileDetails />
            <VisitSections>
              <VisitOptions bggrad={GRADIENTS.orange}>Projects</VisitOptions>
              <VisitOptions bggrad={GRADIENTS.lightBlue}>
                Playgrounds
              </VisitOptions>
              <VisitOptions bggrad={GRADIENTS.lightGreen}>
                Whiteboards
              </VisitOptions>
            </VisitSections>
            {userName === params?.profileUserName && (
              <IconSection>
                <Icon src={COMMON_IMAGES.group} alt="" />
                <Icon src={COMMON_IMAGES.setting} alt="" />
                <Icon src={COMMON_IMAGES.redPen} alt="" />
                <Icon src={COMMON_IMAGES.powerOnOff} alt="" onClick={logOut} />
              </IconSection>
            )}
          </ProfileDiv>
        </ProfileWrapper>
      </HomeWrapper>
    </>
  );
};

export default Profile;
