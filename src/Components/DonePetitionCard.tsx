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
      className="phone:mx-10 mx-5 flex phone:flex-row flex-col-reverse items-center phone:justify-between phone:py-5 py-3 border-b-2 cursor-pointer phone:w-[850px]"
      onClick={() => navigate(`/detail/${props.id}`)}
    >
      <div className="flex flex-col justify-around gap-4 w-[340px]">
        <div className="my-2">
          <div className="bg-Hufs text-white px-4 py-2 rounded-md w-[150px] text-center">
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
        <div className="px-5 py-2 bg-black/50 phone:w-[400px] phone:h-[250px] w-[340px] h-[150px] absolute text-white font-bold phone:text-[25px] text-[20px] flex justify-end flex-col">
          <div className="phone:w-[60%]">
            구급차 막아세운 택시 기사 처벌 청원
          </div>
        </div>
        {props.src ? (
          <div
            style={{
              backgroundImage: `url("${props.src}")`,
            }}
            className="phone:w-[400px] phone:h-[250px] w-[340px] h-[150px] bg-center bg-cover"
          />
        ) : (
          <div
            className="phone:w-[400px] phone:h-[250px] w-[340px] h-[150px] bg-center bg-cover"
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
