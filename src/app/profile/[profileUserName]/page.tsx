"use client";
import { useContext } from "react";
import {
  HomeWrapper,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  LogoImg,
  MobileViewDiv,
  FooterDiv,
  CopyrigthtText,
} from "@/app/page.styles";
import { COMMON_TEXTS, GRADIENTS } from "@/constants/CommonConstants";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import {
  Connection,
  ConnectionSec,
  ConnectionWrapper,
  ConnName,
  CrossIcon,
  Icon,
  IconSection,
  IconSmall,
  ProfileDiv,
  ProfileWrapper,
  VisitOptions,
  VisitSections,
} from "./Profile.styles";
import ProfileDetails from "@/components/ProfileDetails";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import useProfile from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

const Profile = ({ params }: { params: { profileUserName: string } }) => {
  const router = useRouter();
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const { fullName, connections, connModelOpen, logOut, connToggle } =
    useProfile({
      profileUserName: params?.profileUserName,
    });

  return (
    <>
      <HomeWrapper>
        <HeaderDiv>
          <HeaderTextSpan>
            <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
            <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
          </HeaderTextSpan>
        </HeaderDiv>
        <MobileViewDiv>Please open the site in Desktop Mode</MobileViewDiv>
        <ProfileWrapper>
          <ProfileDiv>
            <ProfileDetails
              userName={params?.profileUserName}
              fullName={fullName}
            />
            <VisitSections>
              <VisitOptions
                bggrad={GRADIENTS.orange}
                onClick={() =>
                  router.push(`/projects/${params?.profileUserName}`)
                }
              >
                Projects
              </VisitOptions>
              <VisitOptions
                bggrad={GRADIENTS.lightBlue}
                onClick={() =>
                  router.push(`/playgrounds/${params?.profileUserName}`)
                }
              >
                Playgrounds
              </VisitOptions>
              <VisitOptions
                bggrad={GRADIENTS.lightGreen}
                onClick={() =>
                  router.push(`/whiteboards/${params?.profileUserName}`)
                }
              >
                Whiteboards
              </VisitOptions>
            </VisitSections>
            {userName === params?.profileUserName && (
              <IconSection>
                <Icon src={COMMON_IMAGES.group} alt="" onClick={connToggle} />
                {false && <Icon src={COMMON_IMAGES.setting} alt="" />}
                {false && <Icon src={COMMON_IMAGES.redPen} alt="" />}
                <Icon src={COMMON_IMAGES.powerOnOff} alt="" onClick={logOut} />
              </IconSection>
            )}
          </ProfileDiv>
        </ProfileWrapper>
        <FooterDiv>
            <CopyrigthtText>{COMMON_TEXTS.copyRight}</CopyrigthtText>
          </FooterDiv>
      </HomeWrapper>
      {connModelOpen && (
        <Modal>
          <ConnectionWrapper>
            <CrossIcon src={COMMON_IMAGES.cross} alt="" onClick={connToggle} />
            <ConnectionSec>
              {connections.map((conn: any) => {
                return (
                  <Connection
                    key={conn}
                    onClick={() => router.push(`/profile/${conn}`)}
                  >
                    <IconSmall src={COMMON_IMAGES.userCircle} alt="" />
                    <ConnName>{conn}</ConnName>
                  </Connection>
                );
              })}
            </ConnectionSec>
          </ConnectionWrapper>
        </Modal>
      )}
    </>
  );
};

export default Profile;
