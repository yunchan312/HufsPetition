import { AxiosError } from "axios";

export const throwErr = (err: any) => {
  if (err instanceof AxiosError) {
    console.log(err);
    alert(err.response?.data.message);
  } else {
    console.log(err);
  }
};
