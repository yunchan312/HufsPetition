import PageTitle from "../Components/PageTitle";
import BookMark from "../Components/BookMark";

const MyBookmark = () => {
  return (
    <div className="container pt-[80px]">
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
