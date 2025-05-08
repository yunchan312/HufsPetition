import MyPetitions from "../Components/MyPetitions";
import PageTitle from "../Components/PageTitle";

const MyAgreement = () => {
  return (
    <div className="container pt-[80px]">
      <PageTitle title="내가 동의한 청원" />
      <MyPetitions pagination={true} size={10} mypetition={true} all={false} />
    </div>
  );
};

export default MyAgreement;
