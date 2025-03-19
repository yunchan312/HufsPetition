import { atom } from "recoil";

export const isAdmin = atom({
  key: "user-state",
  default: false,
});
