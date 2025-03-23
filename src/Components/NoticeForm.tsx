import { useForm } from "react-hook-form";
import PageTitle from "./PageTitle";
import { throwErr } from "../utils/ThrowErr";
import { useEffect } from "react";

interface NoticeFormProps {
  title: string;
  detail: string;
}

const NoticeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoticeFormProps>();
  const onSubmit = async (data: NoticeFormProps) => {
    try {
      console.log(data);
    } catch (err) {
      throwErr(err);
    }
  };
  useEffect(() => {
    alert("준비중인 기능입니다.");
  }, []);
  return (
    <div>
      <PageTitle title="공지사항 작성" />

      <form className="px-5 my-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="text-[20px] font-G">공지 제목</div>
          <input
            type="text"
            className="input"
            placeholder="공지 제목을 적어주세요"
            {...register("title", { required: "제목을 입력해주세요" })}
          />
          {errors.title ? (
            <p className="error">{errors.title.message}</p>
          ) : null}
        </div>

        <div>
          <div className="text-[20px] my-2 font-G">내용</div>
          <textarea
            placeholder="공지 내용을 적어주세요(20자 이상)"
            className="input resize-none h-[300px]"
            {...register("detail", {
              required: "내용을 입력해주세요",
              minLength: { value: 20, message: "20자 이상 입력해주세요" },
            })}
          />
          {errors.detail ? (
            <p className="error">{errors.detail.message}</p>
          ) : null}
        </div>

        <input type="submit" value="작성완료" className="hufsBtn" />
      </form>
    </div>
  );
};

export default NoticeForm;
