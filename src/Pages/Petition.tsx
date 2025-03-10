import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

interface PetitionFormProps {
  title: string;
  type: string;
  detail: string;
  links: { value: string }[];
  tags: { value: string }[];
}

const Petition = () => {
  const types = [
    "분야1",
    "분야2",
    "분야3",
    "분야4",
    "분야5",
    "분야1",
    "분야2",
    "분야3",
    "분야4",
    "분야5",
    "분야1",
    "분야2",
    "분야3",
    "분야4",
    "분야5",
    "기타",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PetitionFormProps>({
    defaultValues: {
      tags: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
    },
  });

  const onSubmit = (data: PetitionFormProps) => {
    console.log(data);
  };

  const {
    fields: linkFields,
    append: addLink,
    remove: removeLink,
  } = useFieldArray({
    control,
    name: "links",
  });

  const { fields: tagFields } = useFieldArray({
    control,
    name: "tags",
  });

  const [tempLink, setTempLink] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="pt-[70px] px-10">
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
            {...register("type", {
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
            <option disabled hidden selected>
              분야를 선택해주세요
            </option>
            {types.map((t, i) => (
              <option key={i} value={i}>
                {t}
              </option>
            ))}
          </select>
          {errors.type ? <p className="error">{errors.type.message}</p> : null}
        </div>

        <div>
          <div>청원 내용</div>
          <textarea
            {...register("detail", { required: true })}
            placeholder="입력해주세요."
            className="input resize-none h-[300px]"
          />
          {errors.detail ? <p className="error">내용을 입력해주세요</p> : null}
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
                addLink({ value: tempLink });
                setTempLink("");
                setErr(false);
              }}
              className="hufsBtn"
            >
              + 링크 추가
            </button>
          </div>
          {err ? (
            <div className="text-red-400">링크가 입력되지 않았습니다.</div>
          ) : null}
          {linkFields.map((field, index) => {
            return (
              <div key={field.id} className="flex my-1">
                <div className="w-full border-2 py-1 px-2 bg-Point text-white border-Point">
                  {field.value}
                </div>
                <button
                  type="button"
                  onClick={() => removeLink(index)}
                  className="hufsLightBtn"
                >
                  삭제
                </button>
              </div>
            );
          })}
        </div>

        <div>
          <div>검색태그</div>
          <div className="flex items-center gap-5">
            {tagFields.map((field, index) => (
              <input
                key={field.id}
                type="text"
                placeholder={"태그" + (index + 1)}
                className="input"
                {...register(`tags.${index}.value` as const)}
              />
            ))}
          </div>
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
