import { instanceAuth } from "../Axios";

export const GetMyPetition = async (page: number, size: number) => {
  return await instanceAuth
    .get(`petitions/my-activities`, {
      params: {
        page: page,
        size: size,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
