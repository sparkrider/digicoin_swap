import { useEffect } from "react";
import DropDown from "./button/dropdown";
import GButton from "./button/gbutton";
import DisplayPrice from "./displayprice";

const Rewards = () => {
  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div className="lg:max-w-[520px] max-w-[804.7px] mx-auto rounded-[10px] border-[3px] border-[#6285D54D] bg-[#161619] px-[10px] pt-[10px] pb-[20px] drop-shadow-[0_0_200px_rgba(98,133,213,0.3)] _md:mt-[170px]">
      <div className="flex flex-col gap-[5px]">
        <div className="flex gap-[5px]">
          <div className="w-full h-[40px] rounded-[10px] bg-[#212123] px-[10px] flex justify-start items-center gap-[10px] border-[1px] border-[#45454580]">
            <img src="./assets/images/ethereum.png" alt="ethereum" />
            <span className="font-sans font-[590px] text-[18px] leading-[21.48px] text-[#EAEAEA]">
              ETH
            </span>
          </div>
          <DropDown borderSize={"1px"} width={"100%"} bgColor={"#212123"} />
        </div>
        <DisplayPrice type={0} price={"$4,348.34"} />
        <GButton
          content={"Claim Rewards"}
          btncolor={"#6285D54D"}
          txtcolor={"#6285D5"}
          hoverBgColor={"#6284d5a6"}
          hoverTextColor={"#b0c4f3"}
        />
        <div className="w-full h-[34px] flex justify-between pt-[15px] sm:px-[20px] px-[10px]">
          <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
            Share of pool
          </span>
          <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
            3.23%
          </span>
        </div>
        <div className="w-full h-[24px] flex justify-between pt-[5px] sm:px-[20px] px-[10px]">
          <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
            Total claimed rewards
          </span>
          <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
            4,382
          </span>
        </div>
      </div>
    </div>
  );
};
export default Rewards;
