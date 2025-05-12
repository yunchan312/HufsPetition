import PageTitle from "../Components/PageTitle";
import BookMark from "../Components/BookMark";
import { useEffect } from "react";
import { IsLogged } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

const MyBookmark = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = IsLogged();
    if (!isLogged) {
      const ok = confirm("로그인이 필요합니다. \n로그인하러 가시겠습니까?");
      if (ok) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }
  }, []);
  return (
    <div className="pt-[80px] px-5 w-full">
      <PageTitle title="내 북마크" />
      <BookMark pagination={true} size={10} />
    </div>
  );
};

export default MyBookmark;
