import { instanceAuth } from "../Axios";

export const ReportPetition = (id: number) => {
  return instanceAuth.post(`petitions/${id}/report`);
};
