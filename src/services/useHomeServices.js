import React from "react";
import axios from "axios";
import { useRedux } from "../context/useRedux";

export const homeReducer = {
  retroList: [],
  tags_modal: {
    active: false,
    title: "",
    id: 0,
    note: "",
  },
  complete: false,
};

export const useHomeServices = () => {
  const services = { ...useRedux() };
  const { home, setHome } = services;

  // Add your services (or redux actions)...

  services.setRetroList = (retroList = []) => {
    setHome(
      {
        retroList,
      },
      "SET_RETRO_LIST"
    );
  };

  services.setTagModal = (title = "") => {
    const { tags_modal } = home;
    setHome(
      {
        tags_modal: {
          ...tags_modal,
          active: !tags_modal.active,
          id: "",
          note: "",
          title,
        },
      },
      "TOGGLE_TAG_MODAL"
    );
  };

  services.editTag = (id, questionTitle, note) => {
    const { tags_modal } = home;
    setHome(
      {
        tags_modal: {
          ...tags_modal,
          active: !tags_modal.active,
          title: questionTitle,
          note,
          id,
        },
      },
      "EDIT_TAG_MODAL"
    );
  };

  return services;
};
