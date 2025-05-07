// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookMark from "../Components/BookMark";
import MyAgreedPetitions from "../Components/MyPetitions";
import PageTitle from "../Components/PageTitle";
import Chevron from "../assets/ChevronR.svg";

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="phone:w-[900px] w-[90%] min-h-[70vh] pt-[80px] flex flex-col">
      <PageTitle title="마이페이지" />
      <div className="phone:px-3 my-2">
        <div
          className="text-[20px] font-G flex justify-between items-center w-full py-1 px-1 transition phone:hover:bg-neutral-100 rounded-md cursor-pointer"
          onClick={() => navigate("bookmark")}
        >
          내 북마크 <img src={Chevron} alt="chevronR" className="size-[30px]" />
        </div>
        <BookMark pagination={false} />
      </div>

      <div className="phone:px-3 my-2">
        <MyAgreedPetitions pagination={false} />
      </div>
    </div>
  );
};

export default MyPage;
