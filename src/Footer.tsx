const Footer = () => {
  return (
    <div className="bg-neutral-200 text-neutral-600 h-[300px] py-5 px-10 mt-10">
      <div className="flex items-center phone:text-[30px] text-[25px] font-bold mb-5">
        한국외대 신문고
      </div>
      <div className="pb-5 border-b-2 text-[13px]">© Team Hufstory. 2025.</div>

      <div className="grid grid-cols-2 py-4 text-[13px]">
        <div>
          <div>외청 서비스 소개</div>
          <div>이용약관</div>
          <div>개인정보처리방침</div>
          <div>운영정책</div>
        </div>

        <div className="">
          <div>Follow us</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
