import { instance } from "../Axios";

const Apitest = () => {
  instance.get("petitions").then((res) => console.log(res));
  return <div></div>;
};

export default Apitest;
