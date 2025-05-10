import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GButton from "./button/gbutton";
import DisplayPrice from "./displayprice";
import DropDown from "./button/dropdown";

const Liquidity = () => {
  const [btnSwapStatus, setBtnSwapStatus] = useState(false);
  const [tranStatus, setTranStatus] = useState(0);
  const subitems = ["Add Liquidity", "Remove Liquidity"];
  const mSubitems = ["Add", "Remove"];
  const [currentSubPage, setSubPage] = useState(0);

  const btnSubClk = (index) => {
    setSubPage(index);
  };

  const clkBtnSwap = () => {
    setBtnSwapStatus(!btnSwapStatus);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
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
      }`}
      layout
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="px-[10px] pt-[10px] pb-[20px] bg-[#161619] rounded-[10px]"
        layout
      >
        <div className="flex flex-col gap-y-[5px]">
          <div className="sm:block hidden">
            <div className="relative flex justify-between gap-[2px] p-[2px] rounded-[10px] h-[40px] w-full bg-[#212123]">
              {subitems.map((item, index) => (
                <button
                  key={index}
                  className={`relative z-10 rounded-[8px] w-full py-[10px] flex justify-center items-center font-sans font-[590px] text-[16px] leading-[19.09px] transition-all duration-300 ease-in-out ${
                    currentSubPage === index
                      ? "text-[#6285D5]"
                      : "text-[#616161]"
                  }`}
                  onClick={() => btnSubClk(index)}
                >
                  {item}
                </button>
              ))}
              <motion.div
                className="absolute top-[2px] left-[2px] bottom-[2px] rounded-[8px] bg-[#6285D54D] z-0"
                initial={false}
                animate={{
                  x: currentSubPage * 100 + "%",
                  width: "calc(50% - 1px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
          <div className="sm:hidden block">
            <div className="relative flex justify-between gap-[2px] p-[2px] rounded-[10px] h-[40px] w-full bg-[#212123]">
              {mSubitems.map((item, index) => (
                <button
                  key={index}
                  className={`relative z-10 rounded-[8px] w-full py-[10px] flex justify-center items-center font-sans font-[590px] text-[16px] leading-[19.09px] transition-all duration-300 ease-in-out ${
                    currentSubPage === index
                      ? "text-[#6285D5]"
                      : "text-[#616161]"
                  }`}
                  onClick={() => btnSubClk(index)}
                >
                  {item}
                </button>
              ))}
              <motion.div
                className="absolute top-[2px] left-[2px] bottom-[2px] rounded-[8px] bg-[#6285D54D] z-0"
                initial={false}
                animate={{
                  x: currentSubPage * 100 + "%",
                  width: "calc(50% - 1px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSubPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentSubPage === 0 ? (
                <div className="relative mb-[5px]">
                  <DisplayPrice
                    type={0}
                    bgcolor={"#0F0F1199"}
                    price={"$382,483.28"}
                  />
                  <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[10px] border-[5px] p-[10px] border-[#161619] bg-[#212123] z-10 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                    <img src="./assets/images/Plus.png" alt="plus" />
                  </div>
                </div>
              ) : (
                <div className="flex gap-[5px] mb-[5px]">
                  <div className="w-full h-[40px] rounded-[10px] bg-[#212123] px-[10px] flex justify-start items-center gap-[10px]">
                    <img src="./assets/images/ethereum.png" alt="ethereum" />
                    <span className="font-sans font-[590px] text-[18px] leading-[21.48px] text-[#EAEAEA]">
                      ETH
                    </span>
                  </div>
                  <div className="w-full h-[40px] rounded-[10px] bg-[#212123] px-[10px] flex justify-start items-center">
                    <DropDown width={"100%"} />
                  </div>
                </div>
              )}

              {currentSubPage === 0 ? (
                <DisplayPrice
                  type={1}
                  bgcolor={"#2B2B2F61"}
                  price={"$382,483.28"}
                />
              ) : (
                <DisplayPrice
                  type={2}
                  bgcolor={"#2B2B2F61"}
                  price={"$382,483.28"}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {tranStatus === 0 ? (
            <GButton
              content={currentSubPage === 0 ? "Swap" : "Remove Liquidity"}
              btncolor={"#6285D54D"}
              txtcolor={"#6285D5"}
              hoverBgColor={"#6284d5a6"}
              hoverTextColor={"#b0c4f3"}
              onclick={() => clkBtnSwap()}
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

          <motion.div
            className="w-full pt-[15px] sm:px-[20px] px-[10px] pb-[10px] font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]"
            layout
          >
            1 ETH = 1.000 VISION{" "}
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              ($52,948.23)
            </span>
          </motion.div>
          <motion.div
            className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between"
            layout
          >
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              VISION per ETH
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              7482.3823
            </span>
          </motion.div>
          <motion.div
            className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between"
            layout
          >
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              ETH per VISION
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              0.00%
            </span>
          </motion.div>
          <motion.div
            className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between"
            layout
          >
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
              Share of pool
            </span>
            <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
              0.032%
            </span>
          </motion.div>
          {currentSubPage === 0 ? (
            <motion.div
              className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between"
              layout
            >
              <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
                Pool revenue per trade
              </span>
              <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
                1.2%
              </span>
            </motion.div>
          ) : (
            <motion.div layout>
              <motion.div
                className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between"
                layout
              >
                <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
                  ETH
                </span>
                <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
                  4,573.43
                </span>
              </motion.div>
              <motion.div
                className="w-full pt-[5px] sm:px-[20px] px-[10px] flex justify-between"
                layout
              >
                <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
                  VISION
                </span>
                <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#EAEAEA]">
                  32.23 Million
                </span>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Liquidity;
