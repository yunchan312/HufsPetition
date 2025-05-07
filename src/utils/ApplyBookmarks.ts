import { instanceAuth } from "../Axios";

export const ApplyBookmark = async (id: number) => {
  return await instanceAuth
    .post(`petitions/${id}/bookmark`)
    .then((res) => {
      const ok = confirm(
        `${res.data.message}\n북마크를 확인하러 가시겠습니까?`
      );
      if (ok) {
        window.location.href = `${import.meta.env.VITE_BASE_URL}/mypage`;
      }
    })
    .catch((err) => alert(err.response.data.message));
};

export const GetBookmark = async (page: number, size: number) => {
  const data = await instanceAuth
    .get(`petitions/bookmark`, {
      params: { page: page, size: size },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return data;
};
