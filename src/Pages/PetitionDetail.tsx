import { useForm } from "react-hook-form";
import StatusBar from "../Components/StatusBar";
import { useState } from "react";
import AgreeModal from "../Components/AgreeModal";

interface AgreeForm {
  agree: string;
}
const statusEnum = {
  ONGOING: "ongoing",
  WAITING: "waiting",
  DONE: "done",
};
const PetitionDetail = () => {
  const detail = `BTS는 단순한 K-pop 그룹을 넘어 전 세계적으로 한국 문화를 대표하는 아이콘이 되었습니다. 그들의 음악, 활동, 그리고 메시지는 많은 사람들에게 영감을 주며, 한국의 이미지를 세계에 긍정적으로 알리는 데 큰 기여를 했습니다. 그렇기에 BTS가 군 면제를 받을 자격이 충분하다고 생각합니다.\n\n

첫째, BTS는 국가의 문화적 위상을 높이고 경제적으로도 큰 영향을 미쳤습니다. 전 세계에서 BTS의 팬층은 수백만 명에 달하며, 이들이 한국을 방문하는 관광객들까지 포함하면 그 경제적 효과는 상상을 초월합니다. 한국의 글로벌 이미지를 한층 강화시킨 BTS는 국가 브랜드를 세계 무대에서 성공적으로 홍보한 대표적인 사례입니다.\n\n

둘째, BTS는 군 복무를 대신할 만큼 그들의 활동이 국가에 미친 긍정적인 영향이 크기 때문입니다. 군 복무는 중요한 의무이지만, BTS와 같은 예술가들이 군에 가는 동안 그들의 활동이 끊어지면 문화적으로 얻을 수 있는 기회가 사라지기 때문에, BTS가 군 면제를 받는 것은 단기적인 개인적 이익을 넘어 국가 차원에서의 이득이라고 할 수 있습니다.\n\n

셋째, BTS는 그들의 음악을 통해 긍정적인 메시지를 전달하고, 세계적으로 사회적 이슈에 대해 목소리를 내고 있습니다. 그들은 ‘Love Myself’와 같은 캠페인을 통해 정신 건강에 대한 인식을 높였고, 글로벌 팬들에게 희망과 용기를 주었습니다. 그들의 활동은 단순히 음악적 성과에 그치지 않고 사회적 책임을 다하는 모습까지 보여주고 있어, 그들의 군 면제를 찬성하는 이유는 그만큼 이들이 한국 사회에 기여하는 바가 크기 때문입니다.\n\n

결론적으로, BTS는 그들의 음악과 활동을 통해 한국을 세계에 알린 문화적 대사이자 경제적 기여자로서 군 면제를 받을 자격이 충분하다고 생각합니다. 군 복무와 국가 의무는 중요한 일이지만, BTS가 계속해서 그들의 긍정적인 영향을 전 세계로 확장시키는 것이 우리나라에도 더 큰 도움이 될 것입니다.\n\n`;

  const answer = `국민 여러분, 안녕하십니까? 오늘 저는 BTS의 군 면제 문제에 대해 제 입장을 말씀드리고자 합니다. BTS는 단순한 음악 그룹이 아니라, 대한민국을 대표하는 문화적 상징이자 전 세계적으로 큰 영향을 미치는 글로벌 아이콘입니다. 그들이 우리나라의 이미지를 높이는 데 기여한 바는 매우 큽니다. 따라서 저는 BTS가 군 면제를 받을 자격이 충분하다고 믿습니다.\n\n

첫째, BTS는 국가의 문화적 위상을 높였을 뿐만 아니라, 경제적으로도 매우 큰 영향을 미쳤습니다. BTS의 활동은 우리나라를 세계 무대에서 더욱 널리 알렸으며, 그들의 팬층은 수백만 명에 달합니다. 이들은 한국을 방문하고, 우리 문화와 예술에 대한 관심을 높였으며, 경제적 효과 또한 상당합니다. BTS가 없었다면, 우리가 경험할 수 없었을 문화적, 경제적 기회를 놓쳤을 것입니다. BTS는 단순히 음악적 성과를 넘어서, 국가 브랜드와 한국의 글로벌 이미지를 강화한 주역입니다.\n\n

둘째, BTS는 그들의 활동을 통해 사회에 긍정적인 메시지를 전달하고, 전 세계적으로 큰 영향을 끼쳤습니다. 그들은 음악을 통해 정신 건강 문제, 평화, 사랑, 인권 등의 중요한 사회적 이슈에 대해 목소리를 내왔습니다. 이러한 활동들은 단순한 연예계의 경계를 넘어, 많은 사람들에게 희망과 용기를 주었고, 한국의 외교적 이미지에도 긍정적인 영향을 미쳤습니다. 그들의 군 복무로 인해 활동이 중단된다면, 이로 인해 발생할 수 있는 문화적 손실은 매우 클 것입니다.\n\n

셋째, BTS는 이미 그들의 군 복무를 대신할 만큼 국가와 사회에 기여하고 있습니다. 군 복무는 중요한 의무이지만, BTS와 같은 세계적 아티스트들이 그들의 음악적, 사회적 기여를 통해 얻을 수 있는 가치는 그 어떤 군 복무의 시간보다 크다고 생각합니다. 그들의 활동은 단순한 개인적 이익이 아니라, 대한민국을 대표하는 문화적 상징으로서 전 세계에 긍정적인 영향을 미쳤습니다. 따라서 BTS가 군 면제를 받는 것은 우리나라에게도 더 큰 이익을 가져다줄 것입니다.\n\n

결론적으로, 저는 BTS가 군 면제를 받을 자격이 충분하다고 믿습니다. 그들의 군 면제는 단순히 그들의 개인적인 문제가 아니라, 대한민국의 문화적 위상과 국가적 이익에 중요한 영향을 미칠 것입니다. 우리 모두는 BTS가 계속해서 세계에서 활발히 활동하며, 한국을 대표하는 문화적 대사로서의 역할을 이어갈 수 있도록 지원해야 합니다.\n\n

국민 여러분, BTS는 단순한 연예인이 아니라, 우리나라의 소중한 자산입니다. 그들이 더 큰 무대에서 활동을 이어나갈 수 있도록 함께 응원합시다. 감사합니다.\n\n`;

  const links = `https://www.ytn.co.kr/_ln/0103_20200622100051799 youtube.com`;
  const status = statusEnum.ONGOING;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgreeForm>();

  const onSubmit = (data: AgreeForm) => {
    console.log(data);
    alert("정상적으로 처리되었습니다.");
  };
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="py-[80px] phone:px-10 px-1 w-[90%]">
      {isModal ? (
        <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <AgreeModal setter={setIsModal} />
        </div>
      ) : null}
      <div className="text-[30px] my-5 border-b-2 phone:border-0">
        국위선양 BTS 멤버들 군면제 해주세요
      </div>
      <div className="">
        <StatusBar
          status={status}
          counts={1234556}
          category={"인권/환경"}
          startdate="2020.01.01"
          enddate="2020.02.01"
        />
      </div>

      {status === "done" ? (
        <div>
          <div className="mt-10 text-[30px]">답변 내용</div>
          <div>
            {answer.split("\n").map((d, i) => (
              <div key={i} className="my-5">
                {d}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <div className="mt-10 text-[30px]">청원 내용</div>
        <div>
          {detail.split("\n").map((d, i) => (
            <div className="my-5" key={i}>
              {d}
            </div>
          ))}
        </div>
      </div>

      <div className="border-y-2 w-full border-Point mb-5">
        <div className="text-[20px] text-Point pt-3">관련 링크</div>
        <div className="flex flex-col">
          {links.split(" ").map((l, i) => (
            <div key={i} className="py-2 overflow-hidden w-[90%]">
              <div>링크{i + 1}</div>
              <li className="list-none text-blue-400">{l}</li>
            </div>
          ))}
        </div>
      </div>

      {status === "ongoing" ? (
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

      <div
        className="border-2 border-Point w-full text-center mx-auto py-1 px-2 cursor-pointer bg-Point text-white font-bold"
        onClick={() => {
          setIsModal(true);
        }}
      >
        동의 내용 보기
      </div>
    </div>
  );
};

export default PetitionDetail;
