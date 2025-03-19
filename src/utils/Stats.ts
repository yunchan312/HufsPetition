import { instance } from "../Axios";

export const GetStats = () => {
  return instance.get("petitions/stat");
};
