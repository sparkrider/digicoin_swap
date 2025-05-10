import { useContext } from "react";
import MyContext from "../../MyContext";
const DropDown = ({ width, borderSize, bgColor }) => {
  const symbol = ["Timage1", "Timage2", "Timage3"];
  const pName = ["VISION", "VCAT", "TAR"];
  const { dropModal, setDropModal } = useContext(MyContext);
  const { currentDropItem, setCurrentDropItem } = useContext(MyContext);
  const clkDownArrowBtn = () => {
    setDropModal(!dropModal);
  };
  return (
    <div
      className={`h-[40px] rounded-[8px] border-[#45454580] flex justify-between items-center px-[10px]`}
      style={{
        borderWidth: borderSize,
        width: width,
        backgroundColor: bgColor,
      }}
    >
      <div className="flex gap-[10px] justify-center items-center">
        <img
          src={`./assets/images/tokenitems/${symbol[currentDropItem]}.png`}
          alt="eth"
          className="sm:block hidden"
        />
        <span className="font-sans font-[590px] text-[18px] leading-[21.48px] text-[#EAEAEA]">
          {pName[currentDropItem]}
        </span>
      </div>
      <img
        src="./assets/images/DownArrow.png"
        alt="downarrow"
        className=" cursor-pointer"
        onClick={() => clkDownArrowBtn()}
      />
    </div>
  );
};
export default DropDown;
