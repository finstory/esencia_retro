import React from 'react'
import axios from 'axios';
import { useRedux } from '../context/useRedux';

export const authReducer = {
  user: {
    name: "Facu"
  }
};

export const useAuthServices = () => {
  const services = { ...useRedux() };
  const { auth, setAuth } = services;

  // Add your services (or redux actions)...

  services.changeUserName = () => {
    setAuth({ user: { name: "Sion" } }, "CHANGE_USER_NAME");
  }

  return { ...services };
}