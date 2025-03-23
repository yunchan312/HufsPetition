// import ManageForm from "../Components/ManageForm";
import { useState } from "react";
import NoticeForm from "../Components/NoticeForm";
import QNAForm from "../Components/QNAForm";

const Service = () => {
  const [form, setForm] = useState(0);
  return (
    <div className="phone:w-[900px] w-[90%] pt-[80px] flex flex-col gap-3">
      <div className="flex mx-5 border-b-2 text-[20px] font-G *:cursor-pointer">
        <div
          onClick={() => setForm(0)}
          style={{
            boxShadow: form === 0 ? "0px -1px 10px #a1a1a1" : "none",
            color: form === 0 ? "black" : "#a1a1a1",
          }}
          className="border-neutral-50 px-3 py-1 rounded-t-md"
        >
          공지사항 작성
        </div>
        <div
          onClick={() => setForm(1)}
          style={{
            boxShadow: form === 1 ? "0px -1px 10px #a1a1a1" : "none",
            color: form === 1 ? "black" : "#a1a1a1",
          }}
          className="border-neutral-50 px-3 py-1 rounded-t-md"
        >
          QNA 작성
        </div>
      </div>

      <div>{form === 0 ? <NoticeForm /> : <QNAForm />}</div>
    </div>
  );
};

export default Service;
