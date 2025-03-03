import Default from "../assets/photo.png";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface DonePetitionCardProps {
  title: string;
  id: number;
  startdate: string;
  enddate: string;
  count: number;
  donedate: string;
  src?: string;
}
const DonePetitionCard = (props: DonePetitionCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-10 flex justify-between py-5 border-b-2 cursor-pointer"
      onClick={() => navigate(`/detail/${props.id}`)}
    >
      <div className="flex flex-col justify-around gap-4">
        <div>
          <div className="bg-Hufs text-white px-4 py-2 rounded-md w-[130px] text-center">
            청원답변 {props.id}호
          </div>
          <div className="text-[20px] text-Hufs font-semibold mt-5">
            {props.title}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <div className="flex flex-col items-center text-[13px]">
              <FaClockRotateLeft className="text-[50px]" />
              <div>청원 시작</div>
              <div>[{props.startdate}]</div>
            </div>
          </div>
          <FaChevronRight className="text-[30px]" />
          <div>
            <div className="flex flex-col items-center text-[13px]">
              <FaRegCircleCheck className="text-[50px]" />
              <div>청원 마감</div>
              <div>[{props.enddate}]</div>
            </div>
          </div>
          <FaChevronRight className="text-[30px]" />

          <div>
            <div className="flex flex-col items-center text-[13px]">
              <RiUserVoiceFill className="text-[50px]" />
              <div>청원 인원</div>
              <div>
                {props.count
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </div>
          </div>
          <FaChevronRight className="text-[30px]" />

          <div>
            <div className="flex flex-col items-center text-[13px]">
              <FaUserCheck className="text-[50px]" />
              <div>답변일</div>
              <div>[{props.donedate}]</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative *:rounded-lg">
        <div className="px-5 py-2 bg-black/50 w-[400px] h-[250px] absolute text-white font-bold text-[25px] flex justify-end flex-col">
          <div className="w-[60%]">구급차 막아세운 택시 기사 처벌 청원</div>
        </div>
        {props.src ? (
          <div
            style={{
              backgroundImage: `url("${props.src}")`,
            }}
            className="w-[400px] h-[250px] bg-center bg-cover"
          />
        ) : (
          <div
            className="w-[400px] h-[250px] bg-center bg-cover"
            style={{
              backgroundImage: `url(${Default})`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DonePetitionCard;
