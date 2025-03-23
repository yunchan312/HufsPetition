import { instance } from "../Axios";

export const GetPetitionsOnGoing = (page: number, sort: string) => {
  const petitions = instance.get("petitions/ongoing", {
    params: { page: page, size: 10, sort: sort },
  });

  return petitions;
};

export const GetPetitionsExpired = (page: number, sort: string) => {
  const petitions = instance.get("petitions/expired", {
    params: { page: page, size: 10, sort: sort },
  });

  return petitions;
};

export const GetPetitionsWaiting = (page: number, sort: string) => {
  const petitions = instance.get("petitions/waiting", {
    params: { page: page, size: 10, sort: sort },
  });

  return petitions;
};

export const GetPetitionsAnswered = (page: number, sort: string) => {
  const petitions = instance.get("petitions/answered", {
    params: { page: page, size: 10, sort: sort },
  });

  return petitions;
};

export const GetPetitionDetail = async (id?: string) => {
  return instance.get(`petitions/${id}/view`);
};

export const GetPetitionAnswer = (id?: string) => {
  return instance.get(`answers/petition/${id}`);
};
