import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IsLogged } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { PetitionFormProps } from "../Interfaces";
import { CategoryEnum } from "../Enums";
import { RegisterPetition } from "../utils/Petitions";
import { throwErr } from "../utils/ThrowErr";

const Petition = () => {
  const navigate = useNavigate();
  const categories = Object.values(CategoryEnum);
  const categoryKeys = Object.keys(CategoryEnum);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<PetitionFormProps>({
    defaultValues: {
      links: [],
    },
  });

  const onSubmit = async (data: PetitionFormProps) => {
    try {
      await RegisterPetition(data);
      navigate("/ongoing");
    } catch (err) {
      throwErr(err);
    }
  };

  const [tempLink, setTempLink] = useState("");
  const [err, setErr] = useState(false);

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

  const addLink = (newLink: string) => {
    const currentLinks = getValues("links"); // 현재 배열 가져오기
    setValue("links", [...currentLinks, newLink]); // 배열 업데이트
  };

  const removeLink = (index: number) => {
    const currentLinks = getValues("links");
    setValue(
      "links",
      currentLinks.filter((_, i) => i !== index)
    );
  };

  const links = watch("links");

  return (
    <div className="pt-[70px] px-10 w-full phone:w-[900px]">
      <div className="text-[25px] py-3 border-b-2 font-G">청원하기</div>

      <form
        className="pt-5 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div>청원 제목</div>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="입력해주세요."
            className="input"
          />
          {errors.title ? <p className="error">제목을 입력해주세요</p> : null}
        </div>

        <div>
          <div>청원 분야</div>
          <select
            {...register("category", {
              required: true,
              validate: {
                notValid: (val) => {
                  if (val === "분야를 선택해주세요") {
                    return "분야를 선택해주세요";
                  } else {
                    return;
                  }
                },
              },
            })}
            className="input"
            defaultValue="분야를 선택해주세요"
          >
            <option disabled hidden>
              분야를 선택해주세요
            </option>
            {categories.map((t, i) => (
              <option key={i} value={categoryKeys[i]}>
                {t}
              </option>
            ))}
          </select>
          {errors.category ? (
            <p className="error">{errors.category.message}</p>
          ) : null}
        </div>

        <div>
          <div>청원 내용</div>
          <textarea
            {...register("content", { required: true })}
            placeholder="입력해주세요."
            className="input resize-none h-[300px]"
          />
          {errors.content ? <p className="error">내용을 입력해주세요</p> : null}
        </div>

        <div>
          <div>관련 링크</div>
          <div className="flex">
            <input
              placeholder="링크 입력"
              className="input"
              onChange={(e) => setTempLink(e.target.value)}
              value={tempLink}
            />
            <button
              type="button"
              onClick={() => {
                if (tempLink === "") {
                  setErr(true);
                  return;
                }
                addLink(tempLink);
                setTempLink("");
                setErr(false);
              }}
              className="border-2 border-Hufs bg-Hufs text-white w-[50%] py-1 text-center cursor-pointer"
            >
              + 링크 추가
            </button>
          </div>
          {err ? (
            <div className="text-red-400">링크가 입력되지 않았습니다.</div>
          ) : null}
          {links.map((field, index) => {
            return (
              <div key={index} className="flex my-1">
                <div className="w-full border-2 py-1 px-2 bg-Point text-white border-Point">
                  {field}
                </div>
                <button
                  type="button"
                  onClick={() => removeLink(index)}
                  className="border-2 text-Hufs py-1 text-center cursor-pointer w-[50%]"
                >
                  삭제
                </button>
              </div>
            );
          })}
        </div>

        <div className="border-t-2 flex gap-4 items-center justify-center pt-5">
          <input type="submit" value="작성 완료" className="hufsBtn" />
          <div
            className="hufsLightBtn"
            onClick={() => {
              const ok = confirm("입력한 모든 정보를 초기화하겠습니까?");
              if (ok) {
                window.location.reload();
              }
            }}
          >
            작성 취소
          </div>
        </div>
      </form>
    </div>
  );
};

export default Petition;
