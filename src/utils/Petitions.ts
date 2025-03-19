import { instanceAuth } from "../Axios";
import { PetitionFormProps } from "../Interfaces";

export const RegisterPetition = async (data: PetitionFormProps) => {
  console.log(data);
  return await instanceAuth.post("petitions/new", data);
};

export const AgreePetition = (id: string) => {
  return instanceAuth.post(`petitions/${id}/agree`);
};
