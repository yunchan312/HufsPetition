import { instance } from "../Axios";

export const GetBoard = (type: string, page: number) => {
  return instance.get(`boards/${type}`, {
    params: {
      page: page,
      size: 10,
    },
  });
};

export const GetBoardDetail = (type: string, boardId: string) => {
  return instance.get(`boards/${type}/${boardId}`);
};
