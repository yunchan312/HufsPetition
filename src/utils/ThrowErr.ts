import { AxiosError } from "axios";

export const throwErr = (err: any) => {
  if (err instanceof AxiosError) {
    alert(err.response?.data.message);
  } else {
    console.log(err);
  }
};
