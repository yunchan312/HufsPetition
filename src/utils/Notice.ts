// import { adminInstance } from "../Axios";

import { adminInstance } from "../Axios";

export const Board = (
  title: string,
  detail: string,
  writer: string,
  key: string,
  type: string
) => {
  return adminInstance.post(`boards/${type}`, {
    key: key,
    writer: writer,
    title: title,
    content: detail,
    boardType: type,
  });
};
