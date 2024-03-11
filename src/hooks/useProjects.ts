import { defaultStateReducer } from "@/utils/CommonUtils";
import { useEffect, useReducer, useState } from "react";

const initialState: {
  createFileName: string;
  projects: Array<any>;
  isCreateModalOpen: boolean;
} = {
  createFileName: "",
  projects: [],
  isCreateModalOpen: false,
};

const useProjects = () => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { createFileName, isCreateModalOpen, projects } = state;

  const onCreateNewClick = () => {
    dispatch({ payload: { isCreateModalOpen: true } });
  };

  const onCreateFile = () => {
    dispatch({ payload: { isCreateModalOpen: false } });
  };

  const onFileNameChange = (e: any) => {
    const val = e.target.value;
    dispatch({ payload: { createFileName: val } });
  };

  return {
    createFileName,
    isCreateModalOpen,
    projects,
    onFileNameChange,
    onCreateNewClick,
    onCreateFile,
  };
};

export default useProjects;
