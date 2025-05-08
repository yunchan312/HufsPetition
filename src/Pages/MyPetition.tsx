import MyPetitions from "../Components/MyPetitions";
import PageTitle from "../Components/PageTitle";

const MyPetition = () => {
  return (
    <div className="container pt-[80px]">
      <PageTitle title="내가 건의한 청원" />
      <MyPetitions pagination={true} size={10} mypetition={false} all={false} />
    </div>
  );
};

export default MyPetition;
