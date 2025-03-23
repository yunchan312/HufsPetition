import { adminInstance, instance, instanceAuth } from "../Axios";
import { PetitionFormProps } from "../Interfaces";

export const RegisterPetition = async (data: PetitionFormProps) => {
  return await instanceAuth.post("petitions/new", data);
};

export const AgreePetition = (id: string) => {
  return instanceAuth.post(`petitions/${id}/agree`);
};

export const GetAgreements = (id: string, page: number) => {
  const data = { page: page, size: 10 };
  return instance.get(`petitions/${id}/agreements`, { data });
};

export const DeletePetitions = (id: number) => {
  return adminInstance.delete(`super/petitions/${id}/delete`);
};
