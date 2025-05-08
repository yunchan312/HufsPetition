import MyPetitions from "../Components/MyPetitions";
import PageTitle from "../Components/PageTitle";

const MyAgreement = () => {
  return (
    <div className="pt-[80px] px-5 w-full">
      <PageTitle title="내가 동의한 청원" />
      <MyPetitions pagination={true} size={10} mypetition={true} all={false} />
    </div>
  );
};

export default MyAgreement;
