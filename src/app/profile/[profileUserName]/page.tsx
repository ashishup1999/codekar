"use client";
import { useContext, useEffect } from "react";
import {
  HomeWrapper,
  HeaderDiv,
  HeaderText,
  HeaderTextSpan,
  LogoImg,
  FooterDiv,
  CopyrigthtText,
  UserImg,
  ModalHeader,
} from "@/app/page.styles";
import {
  COMMON_TEXTS,
  CONNECTION_STATUS,
  GRADIENTS,
} from "@/constants/CommonConstants";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import {
  Connection,
  ConnectionSec,
  ConnectionWrapper,
  ConnName,
  CrossIcon,
  ExtraOptionSection,
  Icon,
  IconDiv,
  IconSmall,
  IconText,
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
import useConnection from "@/hooks/useConnection";

const Profile = ({ params }: { params: { profileUserName: string } }) => {
  const router = useRouter();
  const { profileUserName } = params;
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const { fullName, connections, connModelOpen, logOut, connToggle } =
    useProfile({ profileUserName });
  const {
    connStatus,
    sendConnectionRequest,
    rejectConnectionRequest,
    removeConnection,
    connectionStatus,
  } = useConnection();

  useEffect(() => {
    connectionStatus(userName, profileUserName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeWrapper plainBg>
        <HeaderDiv>
          <HeaderTextSpan onClick={() => router.push(`/`)}>
            <LogoImg src={COMMON_IMAGES.logoWhite} alt="" />
            <HeaderText>{COMMON_TEXTS.appName}</HeaderText>
          </HeaderTextSpan>
          {userName !== profileUserName && (
            <UserImg
              src={COMMON_IMAGES.userCircle}
              alt=""
              onClick={() => router.push(`/profile/${userName}`)}
            />
          )}
        </HeaderDiv>
        <ProfileWrapper>
          <ProfileDiv>
            <ProfileDetails userName={profileUserName} fullName={fullName} />
            <VisitSections>
              <VisitOptions
                bggrad={GRADIENTS.orange}
                onClick={() => router.push(`/projects/${profileUserName}`)}
              >
                Projects
              </VisitOptions>
              <VisitOptions
                bggrad={GRADIENTS.lightBlue}
                onClick={() => router.push(`/playgrounds/${profileUserName}`)}
              >
                Playgrounds
              </VisitOptions>
              <VisitOptions
                bggrad={GRADIENTS.lightGreen}
                onClick={() => router.push(`/whiteboards/${profileUserName}`)}
              >
                Whiteboards
              </VisitOptions>
            </VisitSections>
            <ExtraOptionSection>
              {userName === profileUserName ? (
                <>
                  <IconDiv onClick={connToggle}>
                    <Icon src={COMMON_IMAGES.group} alt="" />
                    <IconText>Connections</IconText>
                  </IconDiv>
                  {false && <IconDiv>
                    <Icon src={COMMON_IMAGES.redPen} alt="" />
                    <IconText>Edit Profile</IconText>
                  </IconDiv>}
                  <IconDiv onClick={logOut}>
                    <Icon src={COMMON_IMAGES.powerOnOff} alt="" />
                    <IconText>Log Out</IconText>
                  </IconDiv>
                </>
              ) : (
                <>
                  {connStatus === CONNECTION_STATUS.notConnected && (
                    <IconDiv
                      onClick={() =>
                        sendConnectionRequest(userName, profileUserName)
                      }
                    >
                      <Icon src={COMMON_IMAGES.redPlus} alt="" />
                      <IconText>Request Connection</IconText>
                    </IconDiv>
                  )}
                  {connStatus === CONNECTION_STATUS.connected && (
                    <IconDiv
                      onClick={() =>
                        removeConnection(userName, profileUserName)
                      }
                    >
                      <Icon src={COMMON_IMAGES.redCross} alt="" />
                      <IconText>Remove Connection</IconText>
                    </IconDiv>
                  )}
                  {connStatus === CONNECTION_STATUS.requested && (
                    <IconDiv
                      onClick={() =>
                        rejectConnectionRequest(userName, profileUserName)
                      }
                    >
                      <Icon src={COMMON_IMAGES.redCross} alt="" />
                      <IconText>Withdraw Request</IconText>
                    </IconDiv>
                  )}
                </>
              )}
            </ExtraOptionSection>
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
            <ModalHeader>Connections</ModalHeader>
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
