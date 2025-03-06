import { useForm } from "react-hook-form";
interface ReplyProps {
  reply: string;
}

const Reply = () => {
  const detail = `BTS는 단순한 K-pop 그룹을 넘어 전 세계적으로 한국 문화를 대표하는 아이콘이 되었습니다. 그들의 음악, 활동, 그리고 메시지는 많은 사람들에게 영감을 주며, 한국의 이미지를 세계에 긍정적으로 알리는 데 큰 기여를 했습니다. 그렇기에 BTS가 군 면제를 받을 자격이 충분하다고 생각합니다.\n\n

첫째, BTS는 국가의 문화적 위상을 높이고 경제적으로도 큰 영향을 미쳤습니다. 전 세계에서 BTS의 팬층은 수백만 명에 달하며, 이들이 한국을 방문하는 관광객들까지 포함하면 그 경제적 효과는 상상을 초월합니다. 한국의 글로벌 이미지를 한층 강화시킨 BTS는 국가 브랜드를 세계 무대에서 성공적으로 홍보한 대표적인 사례입니다.\n\n

둘째, BTS는 군 복무를 대신할 만큼 그들의 활동이 국가에 미친 긍정적인 영향이 크기 때문입니다. 군 복무는 중요한 의무이지만, BTS와 같은 예술가들이 군에 가는 동안 그들의 활동이 끊어지면 문화적으로 얻을 수 있는 기회가 사라지기 때문에, BTS가 군 면제를 받는 것은 단기적인 개인적 이익을 넘어 국가 차원에서의 이득이라고 할 수 있습니다.\n\n

셋째, BTS는 그들의 음악을 통해 긍정적인 메시지를 전달하고, 세계적으로 사회적 이슈에 대해 목소리를 내고 있습니다. 그들은 ‘Love Myself’와 같은 캠페인을 통해 정신 건강에 대한 인식을 높였고, 글로벌 팬들에게 희망과 용기를 주었습니다. 그들의 활동은 단순히 음악적 성과에 그치지 않고 사회적 책임을 다하는 모습까지 보여주고 있어, 그들의 군 면제를 찬성하는 이유는 그만큼 이들이 한국 사회에 기여하는 바가 크기 때문입니다.\n\n

결론적으로, BTS는 그들의 음악과 활동을 통해 한국을 세계에 알린 문화적 대사이자 경제적 기여자로서 군 면제를 받을 자격이 충분하다고 생각합니다. 군 복무와 국가 의무는 중요한 일이지만, BTS가 계속해서 그들의 긍정적인 영향을 전 세계로 확장시키는 것이 우리나라에도 더 큰 도움이 될 것입니다.\n\n`;
  const title = `국위선양 BTS 멤버들 군면제 해주세요`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReplyProps>();

  const onSubmit = (data: ReplyProps) => {
    console.log(data);
  };
  return (
    <div className="py-[80px] phone:px-10 px-1 w-[90%]">
      <div className="text-[25px] border-b-2 my-2 py-2">청원 내용</div>
      <section>
        <div className="bg-Point text-white text-[20px] my-5">{title}</div>
        <div>
          {detail.split("\n").map((d, i) => {
            if (d !== "") {
              return (
                <div key={i}>
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
        <textarea
          {...register("reply", { required: true })}
          className="w-full h-[300px] placeholder:text-Point/50 border-2 border-neutral-200 px-2 py-2 resize-none"
          placeholder="답변을 입력해주세요"
        />
        {errors.reply ? (
          <div className="error">답변을 작성해주세요.</div>
        ) : null}
        <input
          type="submit"
          value="답변하기"
          className="text-white bg-Point py-2 cursor-pointer active:scale-[0.95] transition w-full"
        />
      </form>
    </div>
  );
};

export default Reply;
