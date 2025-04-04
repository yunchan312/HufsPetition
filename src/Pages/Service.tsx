// import ManageForm from "../Components/ManageForm";
import { useState } from "react";
import NoticeForm from "../Components/NoticeForm";
import QNAForm from "../Components/QNAForm";

const Service = () => {
  const [form, setForm] = useState(0);
  return (
    <div className="phone:w-[900px] w-[90%] pt-[80px] flex flex-col">
      <div className="grid phone:grid-cols-[1fr_1fr_3fr] grid-cols-[1fr_1fr] mx-5 font-G *:cursor-pointer relative top-[2px] text-xl">
        <div
          onClick={() => setForm(0)}
          style={{
            color: form === 0 ? "black" : "#d5d5d5",
            borderBottom: form === 0 ? "none" : "2px solid #e3e3e3",
            borderTop: form === 0 ? "2px solid #e3e3e3" : "none",
            borderLeft: form === 0 ? "2px solid #e3e3e3" : "none",
            borderRight: form === 0 ? "2px solid #e3e3e3" : "none",
          }}
          className="border-neutral-50 px-3 py-1 rounded-t-md text-center bg-white"
        >
          공지사항 작성
        </div>
        <div
          onClick={() => setForm(1)}
          style={{
            color: form === 1 ? "black" : "#d5d5d5",
            borderTop: form === 1 ? "2px solid #e3e3e3" : "none",
            borderLeft: form === 1 ? "2px solid #e3e3e3" : "none",
            borderRight: form === 1 ? "2px solid #e3e3e3" : "none",
            borderBottom: form === 1 ? "none" : "2px solid #e3e3e3",
          }}
          className="border-neutral-50 px-3 py-1 rounded-t-md text-center bg-white"
        >
          QNA 작성
        </div>
        <div className="w-full phone:block hidden" />
      </div>

      <div className="border-2 border-[#e3e3e3] phone:px-10 py-5 rounded-xl">
        {form === 0 ? <NoticeForm /> : <QNAForm />}
      </div>
    </div>
  );
};

export default Service;
