import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IsLogged } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { PetitionFormProps } from "../Interfaces";
import { CategoryEnum } from "../Enums";
import { RegisterPetition } from "../utils/Petitions";

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
    const ok = confirm(
      "청원에 등록하면 이후 수정이나 삭제가 어렵습니다.\n한번 더 확인 하셨습니까?"
    );
    if (ok) {
      const temp = await RegisterPetition(data);
      if (temp.data.isSuccess) {
        navigate("/ongoing");
      }
    }
  };

  const [tempLink, setTempLink] = useState("");
  const [err, setErr] = useState(false);
  const content = watch("content");
  const links = watch("links");
  const title = watch("title");

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
            {...register("title", {
              required: "제목을 입력해주세요",
              minLength: {
                value: 5,
                message: "제목은 최소 5글자를 넘겨야 합니다",
              },
              maxLength: {
                value: 40,
                message: "제목은 최대 40자입니다",
              },
            })}
            placeholder="입력해주세요(최소 5글자)"
            className="input"
          />
          <div className="flex items-center w-full">
            <div className="w-full">
              {errors.title ? (
                <p className="error">{errors.title.message}</p>
              ) : null}
            </div>
            <div className="text-[13px] text-right w-full">
              {title ? (
                title.length <= 40 ? (
                  <p className="">{title.length}/40</p>
                ) : (
                  <p className="error">{title.length}/40</p>
                )
              ) : null}
            </div>
          </div>
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
            {...register("content", {
              required: true,
              minLength: {
                value: 20,
                message: "내용은 최소 20자를 넘겨야 합니다",
              },
              maxLength: {
                value: 2000,
                message: "내용은 최대 2000자입니다",
              },
            })}
            placeholder="입력해주세요.(최소 20글자)"
            className="input resize-none h-[300px]"
          />
          {content ? (
            <div className="flex justify-between">
              <div>
                {errors.content ? (
                  <p className="error">{errors.content.message}</p>
                ) : null}
              </div>
              <div className="text-[13px] text-right">
                {content.length > 2000 ? (
                  <p className="error">{content.length}/2000</p>
                ) : (
                  <p>{content.length}/2000</p>
                )}
              </div>
            </div>
          ) : null}
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
