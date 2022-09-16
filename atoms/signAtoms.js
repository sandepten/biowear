import { atom } from "recoil";

export const hamburgerMenuState = atom({
  key: "hamburgerMenuState",
  default: true,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const userNameState = atom({
  key: "userNameState",
  default: "",
});
