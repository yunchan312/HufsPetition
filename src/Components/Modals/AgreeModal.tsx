import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { GetAgreements } from "../../utils/Petitions";
import { AgreementsProps } from "../../Interfaces";
import WarningIcon from "../../assets/Warning.svg";
import { useSetRecoilState } from "recoil";
import { isModal } from "../../atom";

const AgreeModal = () => {
  const [lists, setLists] = useState<AgreementsProps[]>([]);
  const setModal = useSetRecoilState(isModal);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const getPetitionAgreements = async (id: string) => {
      const temp = await GetAgreements(id, page);
      setTotalPages(temp.data.result.totalPages);
      setLists(temp.data.result.content);
    };

    {
      id ? getPetitionAgreements(id) : null;
    }
  }, [page, id]);

  return (
    <div className="flex flex-col justify-between items-center phone:w-[600px] phone:h-[700px] h-[500px] w-[90%] bg-white border-2 ">
      <div className="overflow-y-scroll px-5 py-3 w-full">
        <div className="flex justify-end">
          <FaXmark
            className="text-[30px] text-neutral-400 cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        {lists.length > 0 ? (
          lists.map((l, i) => (
            <div className="border-b-2 py-3" key={i}>
              <div className="text-[25px] text-Point mb-2">
                {l.agreementUserEmail.slice(0, 4) + "*****"}
              </div>
              <div>동의합니다.</div>
            </div>
          ))
        ) : (
          <div className="w-full h-[80%] flex flex-col gap-2 items-center justify-center">
            <img src={WarningIcon} alt="Warning" className="size-[100px]" />
            <div className="text-center">
              동의한 인원이 없습니다. <br />
              해당 의견에 동의하신다면 먼저 동의해주세요!
            </div>
          </div>
        )}
      </div>
      {page === totalPages - 1 ? null : (
        <div
          onClick={() => setPage((prev) => (prev += 1))}
          className="bg-Hufs text-white cursor-pointer active:scale-[0.99] transition phone:hover:bg-Hufs/90 py-2 px-5 my-5 rounded-md"
        >
          더보기
        </div>
      )}
    </div>
  );
};

export default AgreeModal;
