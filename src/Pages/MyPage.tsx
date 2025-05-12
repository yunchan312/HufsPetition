// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookMark from "../Components/BookMark";
import MyAgreedPetitions from "../Components/MyPetitions";
import PageTitle from "../Components/PageTitle";
import Chevron from "../assets/ChevronRWhite.svg";
import { useEffect } from "react";
import { IsLogged } from "../utils/Auth";

const MyPage = () => {
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
    <div className="phone:w-[900px] w-[90%] min-h-[70vh] pt-[80px] flex flex-col">
      <PageTitle title="마이페이지" />
      <div className="phone:px-3 my-2">
        <div
          className="text-[20px] font-G flex justify-between items-center w-full py-1 px-1 transition border-y-2 bg-Point text-white"
          onClick={() => navigate("bookmark?page=0&size=10")}
        >
          내 북마크 <img src={Chevron} alt="chevronR" className="size-[30px]" />
        </div>
        <BookMark pagination={false} size={5} />
      </div>

      <div className="phone:px-3 my-2">
        <MyAgreedPetitions pagination={false} all={true} size={5} />
      </div>
    </div>
  );
};

export default MyPage;
