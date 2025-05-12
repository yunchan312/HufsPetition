import { useNavigate } from "react-router-dom";
import MyPetitions from "../Components/MyPetitions";
import PageTitle from "../Components/PageTitle";
import { useEffect } from "react";
import { IsLogged } from "../utils/Auth";

const MyPetition = () => {
  const navigate = useNavigate();
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
  return (
    <div className="pt-[80px] px-5 w-full">
      <PageTitle title="내가 건의한 청원" />
      <MyPetitions pagination={true} size={10} mypetition={false} all={false} />
    </div>
  );
};

export default MyPetition;
