import { instance, instanceRegister } from "../Axios";

export const SendCode = async (email: string) => {
  return await instance.post("user/code/send", { email: email });
};

export const CertifyCode = async (email: string, code: string) => {
  return await instance.post("user/code/certify", {
    email: email,
    code: code,
  });
};

export const Register = async (email: string, password: string) => {
  return await instanceRegister.post("user/register", {
    email: email,
    password: password,
  });
};
