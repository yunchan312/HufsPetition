import { useEffect, useState } from "react";
import { petitionsDataInterface } from "../Interfaces";
import { SyncLoader } from "react-spinners";
import PetitionCard from "./PetitionCard";
import Pagination from "./Pagination";
import { GetMyPetition } from "../utils/GetMyPage";
import Chevron from "../assets/ChevronRWhite.svg";
import Warning from "../assets/Warning.svg";
import { useNavigate, useSearchParams } from "react-router-dom";

const MyPetitions = ({
  pagination,
  size,
  all,
  mypetition = false,
}: {
  pagination: boolean;
  size: number;
  all: boolean;
  mypetition?: boolean;
}) => {
  const [params] = useSearchParams();
  const [myAgree, setMyAgree] = useState<petitionsDataInterface[]>([]);
  const [myPetitions, setMyPetitions] = useState<petitionsDataInterface[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await GetMyPetition(Number(params.get("page")), size);
        setTotalPages(data.result.agreedPetitions.totalPages);
        setMyAgree(data.result.agreedPetitions.content);
        setMyPetitions(data.result.writtenPetitions.content);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [params.get("page")]);
  return (
    <>
      {all || mypetition ? (
        <>
          {all ? (
            <div
              className="mt-10 text-[20px] font-G flex justify-between items-center w-full py-1 px-1 transition border-y-2 bg-Point text-white"
              onClick={() => navigate("agreement?page=0&size=10")}
            >
              내가 동의한 청원
              <img src={Chevron} alt="chevronR" className="size-[30px]" />
            </div>
          ) : null}
          {myAgree.length > 0 ? (
            <div className="flex items-center flex-col justify-between">
              {isLoading ? (
                <SyncLoader color="#00677f" />
              ) : (
                myAgree.map((b, i) => (
                  <div key={i} className="w-full">
                    <PetitionCard {...b} />
                  </div>
                ))
              )}
              {pagination ? (
                <Pagination
                  totalPages={totalPages}
                  pathname="mypage/agreement"
                  page={Number(params.get("page"))}
                />
              ) : null}
            </div>
          ) : (
            <div
              className="py-10 border-b-2 flex flex-col items-center"
              onClick={() => navigate("/ongoing?page=0&size=10")}
            >
              <div className="flex items-center justify-center gap-5">
                <img src={Warning} alt="warning" className="size-[50px]" />
                <div>
                  내가 동의한 청원이 없습니다. <br /> 청원을 확인하고 의견을
                  더해주세요!
                </div>
              </div>
              <div className="bg-Point phone:w-[450px] w-full text-white text-center py-2 rounded-md mt-4 mx-2 cursor-pointer active:scale-[0.99] transition">
                진행중인 청원 보러 가기
              </div>
            </div>
          )}
        </>
      ) : null}

      {all || !mypetition ? (
        <>
          {all ? (
            <div
              className="mt-10 text-[20px] font-G flex justify-between items-center w-full py-1 px-1 transition border-y-2 bg-Point text-white"
              onClick={() => navigate("mypet?page=0&size=10")}
            >
              내가 건의한 청원
              <img src={Chevron} alt="chevronR" className="size-[30px]" />
            </div>
          ) : null}
          {myPetitions.length > 0 ? (
            <div className="flex items-center flex-col justify-between">
              {isLoading ? (
                <SyncLoader color="#00677f" />
              ) : (
                myPetitions.map((b, i) => (
                  <div key={i} className="w-full">
                    <PetitionCard {...b} />
                  </div>
                ))
              )}
              {pagination ? (
                <Pagination
                  totalPages={totalPages}
                  pathname="mypage/mypet"
                  page={Number(params.get("page"))}
                />
              ) : null}
            </div>
          ) : (
            <div
              className="py-10 border-b-2 flex flex-col items-center"
              onClick={() => navigate("/petition")}
            >
              <div className="flex items-center justify-center gap-5">
                <img src={Warning} alt="warning" className="size-[50px]" />
                <div>
                  내가 건의한 청원이 없습니다. <br /> 당신의 의견을 내어주세요!
                </div>
              </div>
              <div className="bg-Point phone:w-[450px] w-full text-white text-center py-2 rounded-md mt-4 mx-2 cursor-pointer active:scale-[0.99] transition">
                청원하러 가기
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default MyPetitions;
