import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface ManageFormProps {
  intro?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  term?: string;
  userInfo?: string;
  policy?: string;
}
const ManageForm = () => {
  const { register, handleSubmit } = useForm<ManageFormProps>();
  const navigate = useNavigate();
  const onSubmit = (data: ManageFormProps) => {
    console.log(data);
    alert("수정 되었습니다.");
    navigate(-1);
  };
  return (
    <div className="w-full pt-[80px] px-5 min-h-screen">
      <div className="text-[30px] border-b-2 pb-2 font-G">서비스 관리</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-5">
          <div>서비스 소개</div>
          <textarea
            {...register("intro")}
            className="input resize-none placeholder:text-Point/50 h-[250px]"
            placeholder="입력해주세요"
          />
        </div>

        <div className="py-5">
          <div>이용약관</div>
          <textarea
            {...register("term")}
            className="input resize-none placeholder:text-Point/50 h-[250px]"
            placeholder="입력해주세요"
          />
        </div>

        <div className="py-5">
          <div>개인정보처리방침</div>
          <textarea
            {...register("userInfo")}
            className="input resize-none placeholder:text-Point/50 h-[250px]"
            placeholder="입력해주세요"
          />
        </div>

        <div className="py-5">
          <div>운영정책</div>
          <textarea
            {...register("policy")}
            className="input resize-none placeholder:text-Point/50 h-[250px]"
            placeholder="입력해주세요"
          />
        </div>

        <div className="py-5">
          <div>SNS</div>
          <div className="flex items-center gap-2 my-2">
            <div className="hufsBtn">인스타그램</div>
            <input
              {...register("instagram")}
              type="text"
              className="input placeholder:text-Point/50"
              placeholder="입력해주세요"
            />
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="hufsBtn">페이스북</div>
            <input
              {...register("facebook")}
              type="text"
              className="input placeholder:text-Point/50"
              placeholder="입력해주세요"
            />
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="hufsBtn">유튜브</div>
            <input
              {...register("youtube")}
              type="text"
              className="input placeholder:text-Point/50"
              placeholder="입력해주세요"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 py-5 border-t-2">
          <input type="submit" value="수정 완료" className="hufsBtn" />
          <div
            className="hufsLightBtn"
            onClick={() => {
              const ok = confirm("정말로 취소하시겠습니까?");
              if (ok) {
                window.location.reload();
              }
            }}
          >
            수정 취소
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageForm;
