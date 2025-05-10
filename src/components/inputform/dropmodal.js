import { useContext } from "react";
import MyContext from "../../MyContext";
import DropPanel from "./droppanel";

const DropModal = () => {
  const { dropModal, setDropModal } = useContext(MyContext);
  const clkBtnModal = () => {
    setDropModal(!dropModal);
  };
  return (
    <div
      className={`${
        dropModal ? "block" : "hidden"
      } fixed top-0 bottom-0 left-0 h-full w-full px-[20px]  bg-[rgba(15,15,17,0.4)] overflow-auto backdrop-blur-[5px] z-30`}
    >
      <div className="relative max-w-[500px] min-w-[280px] mx-auto">
        <DropPanel />
      </div>
    </div>
  );
};
export default DropModal;
