import { useState, useEffect } from "react";
import GButton from "./button/gbutton";
import DisplayPrice from "./displayprice";

const Swap = () => {
  const [btnSwapStatus, setBtnSwapStatus] = useState(false);
  const [tranStatus, setTranStatus] = useState(0);
  const clkBtnSwap = () => {
    setBtnSwapStatus(!btnSwapStatus);
  };
  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div
      className={`md:max-w-[520px] max-w-[804.7px] mx-auto rounded-[10px] p-[3px] _md:mt-[170px] ${
        tranStatus === 0
          ? "drop-shadow-[0_0_200px_rgba(98,133,213,0.3)]"
          : tranStatus === 1
          ? "drop-shadow-[0_0_200px_rgba(98,213,106,0.3)]"
          : "drop-shadow-[0_0_200px_rgba(213,98,98,0.3)]"
      } ${
        btnSwapStatus
          ? "border-animation"
          : tranStatus === 0
          ? "bg-[#6285D54D]"
          : tranStatus === 1
          ? "bg-[#62D56A4D]"
          : "bg-[#D562624D]"
      } `}
    >
      <div className="px-[10px] pt-[10px] pb-[20px] bg-[#161619] rounded-[10px] ">
        <div className="flex flex-col gap-y-[5px]">
          <div className="flex w-full md:justify-start justify-end">
            <div className="flex w-[209px] h-[40px] rounded-[10px] p-[10px] bg-[#212123] justify-between items-center  border-[1px] border-[#45454580]">
              <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
                0.5% Slippage
              </span>
              <img
                src="./assets/images/Subtract.png"
                alt="substract"
                className=" cursor-pointer"
              />
            </div>
          </div>
          <div className="relative">
            <DisplayPrice
              bgcolor={"#0F0F1199"}
              type={0}
              price={"$382,483.28"}
            />
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[10px] border-[5px] p-[10px] border-[#161619] bg-[#212123] z-10 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
              <img src="./assets/images/Arrow.png" alt="arrow" />
            </div>
          </div>

          <DisplayPrice bgcolor={"#2B2B2F61"} type={1} price={"$382,483.28"} />
          {tranStatus === 0 ? (
            <GButton
              content={"Swap"}
              onclick={() => clkBtnSwap()}
              btncolor={"#6285D54D"}
              txtcolor={"#6285D5"}
              hoverBgColor={"#6284d5a6"}
              hoverTextColor={"#b0c4f3"}
            />
          ) : tranStatus === 1 ? (
            <GButton
              content={"Transaction Successful"}
              btncolor={"#62D56A4D"}
              txtcolor={"#62D56A"}
              hoverBgColor={"#62D56A4D"}
              hoverTextColor={"#62D56A"}
            />
          ) : (
            <GButton
              content={"Transaction Failed"}
              btncolor={"#D562624D"}
              txtcolor={"#D56262"}
              hoverBgColor={"#D562624D"}
              hoverTextColor={"#D56262"}
            />
          )}
          <div className="w-full pt-[15px] sm:px-[20px] px-[10px] pb-[10px] font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
            1 ETH = 1.000 VISION{" "}
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              ($52,948.23)
            </span>
          </div>
          <div className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between">
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              Price Impact
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              -2.26%
            </span>
          </div>
          <div className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between">
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              Maximum Slippage
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              0.00%
            </span>
          </div>
          <div className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between">
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              LP buy fee (5.00%)
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              $38,284.00
            </span>
          </div>
          <div className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between">
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              Creator buy fee (0.00%)
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              $0.00
            </span>
          </div>
          <div className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between">
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              Total fee (5.00%)
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              $38,283.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Swap;
