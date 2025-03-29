import { instance } from "../Axios";

export const GetBoard = (type: string, page: number, size?: number) => {
  return instance.get(`boards/${type}`, {
    params: {
      page: page,
      size: size ? size : 12,
    },
  });
};

export const GetBoardDetail = (type: string, boardId: string) => {
  return instance.get(`boards/${type}/${boardId}`);
};
