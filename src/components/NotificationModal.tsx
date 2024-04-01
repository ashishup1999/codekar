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
  NotifSec,
  NotifType,
  OptionImg,
} from "./NotificationModal.styles";
import useConnection from "@/hooks/useConnection";

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
        <Modal width="400px" height="500px">
          <NotifModalWrapper>
            <CrossIcon
              src={COMMON_IMAGES.cross}
              alt=""
              onClick={() => onClick()}
            />
            <ModalHeader>Notification</ModalHeader>
            {connReqs?.length !== 0 && (
              <NotifSec>
                <NotifType>Connection Requests</NotifType>
                {connReqs.map((str) => {
                  return (
                    <>
                      <Connection key={str}>
                        <ConnectionImg src={COMMON_IMAGES.userCircle} alt="" />
                        <ConnName>{str}</ConnName>
                        <OptionImg
                          src={COMMON_IMAGES.redTick}
                          alt=""
                          onClick={() => acceptConnectionRequest(str, userName)}
                        />
                        <OptionImg
                          src={COMMON_IMAGES.redCross}
                          alt=""
                          onClick={() => rejectConnectionRequest(str, userName)}
                        />
                      </Connection>
                    </>
                  );
                })}
              </NotifSec>
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
