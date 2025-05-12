import PageTitle from "../Components/PageTitle";
import BookMark from "../Components/BookMark";
import { useEffect } from "react";
import { IsLogged } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

const MyBookmark = () => {
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
      <PageTitle title="내 북마크" />
      <BookMark pagination={true} size={10} />
    </div>
    // <div className="container pt-[80px]">
    //   <PageTitle title="내 북마크" />
    //   <div>
    //     {data.length > 0 ? (
    //       data.map((d, i) => (
    //         <div className="w-full" key={i}>
    //           <PetitionCard {...d} />
    //         </div>
    //       ))
    //     ) : (
    //       <div>no data</div>
    //     )}
    //   </div>

    //   <Pagination totalPages={totalPages} setter={setPage} page={page} />
    // </div>
  );
};

export default MyBookmark;
