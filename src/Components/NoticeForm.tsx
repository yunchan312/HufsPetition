import { useForm } from "react-hook-form";
import { Board } from "../utils/Notice";
import { useNavigate } from "react-router-dom";
import { BoardFormInterface } from "../Interfaces";

const NoticeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardFormInterface>();
  const navigate = useNavigate();
  const onSubmit = async (data: BoardFormInterface) => {
    const temp = await Board(
      data.title,
      data.detail,
      data.writer,
      data.key,
      "NOTICE"
    );
    if (temp.data.isSuccess) {
      alert(temp.data.message);
      navigate("/announcement");
    }
  };

  return (
    <div>
      <form
        className="px-5 my-5 w-full flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <div className="text-[20px] font-G">작성자</div>
          <input
            type="text"
            className="input"
            placeholder="작성자의 이름을 적어주세요"
            {...register("writer", { required: "작성자를 입력해주세요" })}
          />
          {errors.writer ? (
            <p className="error">{errors.writer.message}</p>
          ) : null}
        </div>

        <div>
          <div className="text-[20px] font-G">키값</div>
          <input
            type="text"
            className="input"
            placeholder="키값을 적어주세요"
            {...register("key", { required: "키를 입력해주세요" })}
          />
          {errors.key ? <p className="error">{errors.key.message}</p> : null}
        </div>

        <div>
          <div className="text-[20px] my-2 font-G">내용</div>
          <textarea
            placeholder="공지 내용을 적어주세요"
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
