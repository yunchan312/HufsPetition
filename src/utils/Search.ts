import { instance } from "../Axios";

export const SearchPetition = (status: string, keyword: string) => {
  const data = { status: status, keyword: keyword };
  return instance.get("petitions/search", {
    params: data,
  });
};

export const DeBounce = (func: (...args: any[]) => void, timeout = 1000) => {
  let timer: NodeJS.Timeout | undefined;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
