import React, { useContext, useEffect } from "react";
import Modal from "./Modal";
import { ModalHeader, NotifModalWrapper } from "@/app/page.styles";
import { CrossIcon } from "@/app/profile/[profileUserName]/Profile.styles";
import { COMMON_IMAGES } from "@/constants/StaticImages";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import {
  Connection,
  ConnectionImg,
  ConnName,
  NoNotification,
  NotifSec,
  NotifType,
  OptionImg,
} from "./NotificationModal.styles";
import useConnection from "@/hooks/useConnection";
import { useRouter } from "next/navigation";

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
                {connReqs?.map((str) => {
                  return (
                    <>
                      <Connection
                        key={str}
                        onClick={() => router.push(`/profile/${str}`)}
                      >
                        <ConnectionImg src={COMMON_IMAGES.userCircle} alt="" />
                        <ConnName>{str}</ConnName>
                        <OptionImg
                          src={COMMON_IMAGES.redTick}
                          alt=""
                          onClick={(e: any) => {
                            e.stopPropagation();
                            acceptConnectionRequest(str, userName);
                          }}
                        />
                        <OptionImg
                          src={COMMON_IMAGES.redCross}
                          alt=""
                          onClick={(e: any) => {
                            e.stopPropagation();
                            rejectConnectionRequest(str, userName);
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
