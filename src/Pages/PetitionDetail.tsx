import { useForm } from "react-hook-form";
import StatusBar from "../Components/StatusBar";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAdmin, isModal } from "../atom";
import PetitionDetailBtn from "../Components/PetitionDetailBtn";
import BackIcon from "../assets/Back.svg";
import { useNavigate, useParams } from "react-router-dom";
import { AgreeForm, AnswerResponses, PetitionDetailProps } from "../Interfaces";
import { GetPetitionDetail } from "../utils/GetPetitions";
import { statusEnum } from "../Enums";
import { AgreePetition } from "../utils/Petitions";

const PetitionDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgreeForm>();

  const { id } = useParams();
  const onSubmit = async () => {
    const ok = confirm("정말로 동의하시겠습니까?");
    if (ok) {
      if (id) {
        const temp = await AgreePetition(id);
        alert(temp.data.message);
        setModal(true);
      }
    }
  };
  const setModal = useSetRecoilState(isModal);
  const [data, setData] = useState<PetitionDetailProps>();
  const [status, setStatus] = useState("waiting");
  const [answer, setAnswer] = useState<AnswerResponses>();
  const user = useRecoilValue(isAdmin);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetail = async () => {
      const temp = await GetPetitionDetail(id);
      setStatus(
        statusEnum[temp.data.result.petitionStatus as keyof typeof statusEnum]
      );
      setAnswer(temp.data.result.answerResponse);
      setData(temp.data.result);
    };
    try {
      getDetail();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="py-10 phone:px-10 px-3 w-full phone:w-[900px] mx-auto pt-[80px]">
      <div
        className="flex items-center cursor-pointer phone:hover:scale-[1.01] transition"
        onClick={() => navigate(-1)}
      >
        <img src={BackIcon} alt="icon" className="size-[23px]" /> 뒤로가기
      </div>
      <div className="text-[30px] my-5 font-G py-2">{data?.title}</div>
      <div className="border-b-2 pb-2 border-neutral-400">
        <StatusBar
          status={status}
          counts={data?.agreeCount}
          category={data?.category}
          startdate={data?.createDate}
          enddate={data?.endDate}
          views={data?.viewCount}
          writer={data?.writerEmail}
        />
      </div>

      {status === "done" ? (
        <div>
          <div>
            <div className="mt-10 text-[30px] font-G flex justify-between">
              답변 내용
              <div className="text-[10px] text-neutral-400">
                <div>
                  <span className="">by </span>
                  {answer?.writerAdminInfo.email}
                </div>
                <div>{answer?.createdAt.split("T")[0]}</div>
              </div>
            </div>
            <div className="">
              <div key={answer?.answerId} className="">
                <div className="py-5 break-all">{answer?.content}</div>
              </div>
              {/* {answer?.map((a) => (
                <div key={a.answerId} className="rounded-lg shadow-lg">
                  <div className="flex flex-col items-end text-[13px] text-neutral-400">
                    <div>
                      <span className="">by </span>
                      {a.writerAdminInfo.email}
                    </div>
                    <div>{a.createdAt.split("T")[0]}</div>
                  </div>
                  <div className="py-5 break-all">{a.content}</div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      ) : null}

      <div>
        <div className="mt-10 text-[30px] font-G">청원 내용</div>
        <div>
          {data?.content.split("\n").map((d, i) => (
            <div className="my-5" key={i}>
              {d}
            </div>
          ))}
        </div>
      </div>

      <div className="border-y-2 w-full border-Point mb-5">
        <div className="text-[20px] text-Point pt-3">관련 링크</div>
        <div className="flex flex-col">
          {data ? (
            data?.links.length > 0 ? (
              data?.links.map((l, i) => (
                <div key={i} className="py-2 overflow-hidden w-[90%]">
                  <div>링크{i + 1}</div>
                  <a href={l} className="list-none text-blue-400">
                    {l}
                  </a>
                </div>
              ))
            ) : (
              <div className="py-5">링크가 없습니다.</div>
            )
          ) : null}
        </div>
      </div>

      {status === "ongoing" && !user ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="flex items-center">
            <input
              type="text"
              {...register("agree", {
                required: true,
                validate: {
                  isValid: (val) => {
                    if (val !== "동의합니다.") {
                      return "동의합니다. 를 입력해주세요";
                    }
                  },
                },
              })}
              className="border-2 border-Point w-full placeholder:text-Point/50 py-1 px-2"
              placeholder="동의합니다. 를 입력해주세요."
            />
            <input
              type="submit"
              value="동의"
              className="border-2 border-Point w-[200px] py-1 px-2 bg-Point text-white font-bold"
            />
          </div>
          {errors.agree ? (
            <div className="error">
              <strong>동의합니다.</strong> 를 입력해주세요
            </div>
          ) : null}
        </form>
      ) : null}

      {user ? (
        <PetitionDetailBtn
          setter={setModal}
          status={status}
          answerId={answer?.answerId}
        />
      ) : (
        <div
          className="border-2 border-Point w-full text-center mx-auto py-1 px-2 cursor-pointer bg-Point text-white font-bold"
          onClick={() => {
            setModal(true);
          }}
        >
          동의 내용 보기
        </div>
      )}
    </div>
  );
};

export default PetitionDetail;
