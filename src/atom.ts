import { atom } from "recoil";

export const isAdmin = atom({
  key: "user-state",
  default: false,
});

export const isModal = atom({
  key: "isModal",
  default: false,
});
