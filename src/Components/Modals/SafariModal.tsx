import { useSetRecoilState } from "recoil";
import { isSafariModal } from "../../atom";
import XMark from "../../assets/Xmark.svg";
import Safari from "../../assets/Safari.jpeg";
import SafariDesktop from "../../assets/safari_inform.png";
import SafariMobile from "../../assets/safari_inform2.png";
import copyToClipboard from "../../utils/Share";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SafariModal = () => {
  const setIsSafari = useSetRecoilState(isSafariModal);
  const link = `${import.meta.env.VITE_BASE_URL}`;
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".section1",
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    )
      .fromTo(
        ".section2",
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        ".section3",
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        ".section4",
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      );
  }, []);

  return (
    <div
      onClick={() => setIsSafari(false)}
      className="w-full h-full flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col py-5 px-3 bg-white phone:w-[60%] w-[90%] h-[80%] hide-scrollbar overflow-y-scroll rounded-md"
      >
        <div
          className="self-end cursor-pointer"
          onClick={() => setIsSafari(false)}
        >
          <img
            src={XMark}
            alt="xMark"
            className="size-[30px] phone:hover:bg-black/20 rounded-full transition"
          />
        </div>

        {/* 제목 섹션 */}
        <section className="section1 text-center font-G text-2xl flex items-center gap-3 justify-center">
          <img
            src={Safari}
            alt="safari"
            className="size-[40px] rounded-xl shadow-lg shadow-neutral-300 border-2 border-neutral-100"
          />
          <span>Safari 설정 안내</span>
        </section>

        {/* 크롬으로 이동 */}
        <section className="section2 py-5 mt-5 flex flex-col items-center">
          <div>신문고 서비스는 Chrome에 최적화되어있습니다.</div>
          <div className=" phone:hover:text-blue-700 phone:cursor-pointer text-blue-500 border-2 border-neutral-300 phone:w-[60%] w-[90%] rounded-md flex">
            <div className="w-[70%] py-1 px-2 overflow-hidden text-ellipsis">{`${link}`}</div>
            <div
              className="text-black self-end phone:hover:bg-neutral-200 transition bg-neutral-100 w-[30%] h-full py-1 px-auto text-center"
              onClick={() => copyToClipboard(link)}
            >
              복사하기
            </div>
          </div>
        </section>

        {/* 데스크탑 */}
        <section className="section3 my-5">
          <div>[데스크탑]</div>
          <div className="text-[14px]">
            상단에서 'Safari'를 클릭 {">"} 환경설정 {">"} 개인정보 보호 {">"}
            '크로스 사이트 추적 방지' 옵션을 비활성화합니다.
          </div>
          <div>
            <img src={SafariDesktop} alt="SafariDesktopInform" />
          </div>
        </section>

        {/* 모바일 */}
        <section className="section4">
          <div>[모바일]</div>
          <div className="text-[14px]">
            설정 앱을 엽니다. {">"} Safari를 선택합니다. {">"} 개인정보 보호 및
            보안 {">"} '크로스 사이트 추적 방지' 옵션을 비활성화합니다.
          </div>
          <div className="my-5">
            <img
              src={SafariMobile}
              alt="SafariMobileInform"
              className="w-[90%] mx-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

{
  /* <br /> [ 데스크탑 ] <br /> 상단 메뉴에서 'Safari'를
          클릭합니다 {">"} '환경설정'을 선택합니다. {">"} '개인정보 보호' 탭을
          클릭합니다. {">"} '크로스 사이트 추적 방지' 옵션을 비활성화합니다.
          <br />
          [모바일] <br />
          iPhone 또는 iPad에서 설정 앱을 엽니다. {">"} Safari를 선택합니다.{" "}
          {">"}
          개인정보 보호 및 보안 항목으로 이동합니다. {">"} '크로스 사이트 추적
          방지' 옵션을 비활성화합니다. */
}
export default SafariModal;
