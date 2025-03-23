import { adminInstance } from "../Axios";

export const BeforeReply = (id: string) => {
  return adminInstance.get(`answers/petition/${id}`);
};

export const ReplyPetition = (data: string, id: string) => {
  return adminInstance.post(`admin/answers/${id}/new`, { content: data });
};

export const UpdateAnswer = (data: string, id: number) => {
  return adminInstance.patch(`admin/answers/${id}/update`, { content: data });
};

export const DeleteReply = (answerId?: number) => {
  return adminInstance.delete(`admin/answers/${answerId}/delete`);
};
