import React from 'react'
import axios from 'axios';
import { useRedux } from '../context/useRedux';

export const customizeReducer = {
  user: {
    name: "facu",
    pass: "asdasd"
  },
};

export const useCustomizeServices = () => {
  const services = { ...useRedux() };
  const { customize, setCustomize } = services;

  // Add your services (or redux actions)...

  services.switchCustomize = () => {
    const { user } = customize;
    setCustomize({ user: { ...user, name: "pepe" } }, "SWITCH_CUSTOMIZE");
  }



  return { ...services };
}

