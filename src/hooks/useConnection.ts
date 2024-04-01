import { CONNECTION_STATUS, ERROR_MSGS } from "@/constants/CommonConstants";
import { BasicDetailsInterface } from "@/context/BasicDetailsContext";
import userService from "@/services/UserService";
import { useContext, useState } from "react";

const useConnection = () => {
  const { setBasicDetails } = useContext(BasicDetailsInterface);
  const [connStatus, setConnStatus] = useState("");
  const [connReqs, setConnReqs] = useState([]);

  const sendConnectionRequest = async (sender: string, reciever: string) => {
    try {
      const req = { sender, reciever };
      const res = await userService.connectionReq(req);
      if (res?.status != "SUCCESS") throw res;
      setConnStatus(CONNECTION_STATUS.requested);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const rejectConnectionRequest = async (sender: string, reciever: string) => {
    try {
      const req = { sender, reciever };
      const res = await userService.rejectConnectionReq(req);
      if (res?.status != "SUCCESS") throw res;
      setConnStatus(CONNECTION_STATUS.notConnected);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const acceptConnectionRequest = async (sender: string, reciever: string) => {
    try {
      const req = { sender, reciever };
      const res = await userService.addUserConnection(req);
      if (res?.status != "SUCCESS") throw res;
      setConnStatus(CONNECTION_STATUS.connected);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const removeConnection = async (sender: string, reciever: string) => {
    try {
      const req = { sender, reciever };
      const res = await userService.removeUserConnection(req);
      if (res?.status != "SUCCESS") throw res;
      setConnStatus(CONNECTION_STATUS.notConnected);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const connectionStatus = async (sender: string, reciever: string) => {
    try {
      const req = { sender, reciever };
      const res = await userService.connectionStatus(req);
      if (res?.status != "SUCCESS") throw res;
      setConnStatus(res?.message);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  const getAllConnReqs = async (userName: string) => {
    try {
      const res = await userService.getAllConnReqsByUser(userName);
      if (res?.status != "SUCCESS") throw res;
      setConnReqs(res?.connectionReqs);
    } catch (error) {
      setBasicDetails({
        payload: { errorMsg: ERROR_MSGS.TECH_ERROR },
      });
    }
  };

  return {
    connStatus,
    connReqs,
    sendConnectionRequest,
    rejectConnectionRequest,
    acceptConnectionRequest,
    removeConnection,
    connectionStatus,
    getAllConnReqs,
  };
};

export default useConnection;
