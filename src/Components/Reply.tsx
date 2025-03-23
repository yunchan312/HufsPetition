import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { throwErr } from "../utils/ThrowErr";
import { GetPetitionDetail } from "../utils/GetPetitions";
import { useNavigate, useParams } from "react-router-dom";
import {
  AnswerResponses,
  PetitionDetailProps,
  ReplyProps,
} from "../Interfaces";
import { BeforeReply, ReplyPetition, UpdateAnswer } from "../utils/Reply";
const Reply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contents, setContents] = useState<AnswerResponses>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ReplyProps>();
  const reply = watch("reply");
  const onSubmit = async (data: ReplyProps) => {
    try {
      if (id) {
        if (!contents?.content) {
          const temp = await ReplyPetition(data.reply, id);
          if (temp.data.isSuccess) {
            alert(temp.data.message);
            navigate("/done");
          }
        } else {
          const temp = await UpdateAnswer(data.reply, contents?.answerId);
          if (temp.data.isSuccess) {
            alert(temp.data.message);
            navigate(`/detail/${id}`);
          }
        }
      }
    } catch (e) {
      console.log(e);
      throwErr(e);
    }
  };

  useEffect(() => {
    const beforeReply = async () => {
      try {
        if (id) {
          const temp = await BeforeReply(id);
          console.log(temp);
          setContents(temp.data.result);
        }
      } catch (err) {
        throwErr(err);
      }
    };

    beforeReply();
  }, [id]);

  const [detail, setDetail] = useState<PetitionDetailProps>();
  useEffect(() => {
    const getPetition = async () => {
      try {
        const temp = await GetPetitionDetail(id);
        console.log(temp);
        setDetail(temp.data.result);
      } catch (err) {
        throwErr(err);
      }
    };
    getPetition();
  }, []);
  return (
    <div className="py-[80px] phone:px-10 px-1 w-[90%]">
      <div className="text-[25px] border-b-2 my-2 py-2 font-G">청원 내용</div>
      <section>
        <div className="bg-Point/10 px-1 py-1 text-black font-G text-[20px] my-5">
          {detail?.title}
        </div>
        <div>
          {detail?.content.split("\n").map((d, i) => {
            if (d !== "") {
              return (
                <div key={i} className="pb-5">
                  {d} <br />
                </div>
              );
            } else {
              return <div key={i} className="h-1"></div>;
            }
          })}
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <textarea
            {...register("reply", {
              required: true,
              minLength: {
                value: 20,
                message: "내용은 20자 이상 입력해야 합니다.",
              },
              maxLength: {
                value: 2000,
                message: "내용은 2000자 이하로 입력해야 합니다.",
              },
            })}
            className="w-full h-[300px] placeholder:text-Point/50 border-2 border-neutral-200 px-2 py-2 resize-none"
            placeholder="답변을 입력해주세요 (20자 이상)"
            defaultValue={contents?.content}
          />
          {reply ? (
            <div className="flex justify-between">
              <div>
                {errors.reply ? (
                  <div className="error">답변을 작성해주세요.</div>
                ) : null}
              </div>
              <div className="text-right text-[13px]">
                {reply.length > 2000 ? (
                  <p className="error">{reply.length}/2000</p>
                ) : (
                  <p>{reply.length}/2000</p>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <input
          type="submit"
          value={contents?.content ? "수정하기" : "등록하기"}
          className="text-white bg-Point py-2 cursor-pointer active:scale-[0.95] transition w-full"
        />
      </form>
    </div>
  );
};

export default Reply;
