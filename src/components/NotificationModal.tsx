import React, { useContext, useEffect } from "react";
import Modal from "./Modal";
import { ModalHeader, NotifModalWrapper } from "@/app/page.styles";
import { CrossIcon } from "@/app/profile/[profileUserName]/Profile.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import {
  Connection,
  ConnectionImg,
  ConnectionImgWrpr,
  ConnName,
  NoNotification,
  NotifSec,
  NotifType,
  OptionImg,
} from "./NotificationModal.styles";
import useConnection from "@/hooks/useConnection";
import { useRouter } from "next/navigation";
import { getBase64Src } from "@/utils/CommonUtils";

const NotificationModal = ({
  modalOpen,
  onClick,
  setNotifCount,
}: {
  modalOpen: boolean;
  onClick: Function;
  setNotifCount: Function;
}) => {
  const { basicDetails } = useContext(BasicDetailsInterface);
  const { userName } = basicDetails;
  const {
    connStatus,
    connReqs,
    rejectConnectionRequest,
    acceptConnectionRequest,
    getAllConnReqs,
  } = useConnection();
  const router = useRouter();

  useEffect(() => {
    if (userName) getAllConnReqs(userName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, connStatus]);

  useEffect(() => {
    setNotifCount(connReqs?.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connReqs]);

  return (
    <>
      {modalOpen ? (
        <Modal>
          <NotifModalWrapper>
            <CrossIcon
              src={COMMON_IMAGES.cross}
              alt=""
              onClick={() => onClick()}
            />
            <ModalHeader>Notification</ModalHeader>
            {connReqs?.length !== 0 ? (
              <NotifSec>
                <NotifType>Connection Requests</NotifType>
                {connReqs?.map((obj: any) => {
                  return (
                    <>
                      <Connection
                        key={obj?.userName}
                        onClick={() => router.push(`/profile/${obj?.userName}`)}
                      >
                        <ConnectionImgWrpr>
                          <ConnectionImg
                            width={200}
                            height={200}
                            src={
                              obj?.profileImg
                                ? getBase64Src(obj?.profileImg)
                                : COMMON_IMAGES.defaultProfileImg
                            }
                            alt=""
                          />
                        </ConnectionImgWrpr>
                        <ConnName>{obj?.userName}</ConnName>
                        <OptionImg
                          src={COMMON_IMAGES.tick}
                          alt=""
                          onClick={(e: any) => {
                            e.stopPropagation();
                            acceptConnectionRequest(obj?.userName, userName);
                          }}
                        />
                        <OptionImg
                          src={COMMON_IMAGES.cross}
                          alt=""
                          onClick={(e: any) => {
                            e.stopPropagation();
                            rejectConnectionRequest(obj?.userName, userName);
                          }}
                        />
                      </Connection>
                    </>
                  );
                })}
              </NotifSec>
            ) : (
              <NoNotification>No notification as of now</NoNotification>
            )}
          </NotifModalWrapper>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default NotificationModal;
