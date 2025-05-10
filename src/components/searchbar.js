import { useContext, useEffect, useState } from "react";
import MyContext from "../MyContext";
import SearchItem from "./button/searchitem";
import { useHotkeys } from "react-hotkeys-hook";

const SearchBar = () => {
  const tokenName = ["VisionSwap", "VisionCat", "Tar Realm"];
  const symbol = ["Timage1", "Timage2", "Timage3"];
  const pName = ["VISION", "VCAT", "TAR"];

  const { modal, setModal } = useContext(MyContext);
  const [currentStatus, setCurrentStatus] = useState(false);
  const clkBtn = () => {
    setCurrentStatus(!currentStatus);
    setModal(!modal);
  };
  useEffect(() => {
    setCurrentStatus(currentStatus);
  }, [currentStatus]);
  useHotkeys("ctrl+k", (event) => {
    event.preventDefault();
    clkBtn();
    // Your action here
  });
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.metaKey && event.key.toLowerCase() === "k") {
  //       event.preventDefault();
  //       clkBtn();
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div
      className={`w-[482px] relative  rounded-[10px] py-[5px] pr-[5px] flex items-center flex-col  transition-all duration-500 ease-in-out overflow-hidden ${
        modal === false
          ? "h-[50px] pl-[20px]  bg-[#212123] "
          : "h-[300px] border-[2px] border-[#474747] bg-[#212123E5]  pl-[5px] "
      }`}
    >
      <div className="flex gap-[10px] justify-between items-center h-[50px]">
        <img src="./assets/images/Search Icon.png" alt="search" />
        <input
          type="text"
          name="search"
          placeholder="Explore token"
          className="pl-[10px] w-[378px] h-[21px] bg-[#212123] placeholder-[#616161] border-none outline-none text-[#EAEAEA]"
        />
        <button
          className={`w-[40px] h-[40px] rounded-[5px] bg-[#2F2F32] flex justify-center items-center font-sans font-[590px] text-[16px] leading-[19.09px] text-[#616161] ${
            modal ? "hidden" : "block"
          }`}
          onClick={() => clkBtn()}
        >
          ⌘K
        </button>
      </div>
      <div
        className={`${
          modal ? "block" : "hidden "
        } w-full   absolute top-[50px]  `}
      >
        <div className="w-[98px] h-[37px] py-[10px] pl-[25px]">
          <span className="font-sans font-[400px] text-[14px] leading-[16.71px] text-[#888888]">
            Top tokens
          </span>
        </div>
        <div className="flex flex-col gap-[5px] text-nowrap">
          {tokenName.map((item, index) => (
            <SearchItem
              tokenName={item}
              symbol={symbol[index]}
              pName={pName[index]}
              tokenPrice={"$23.9232"}
              address={"0x2d3f...ed9a"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
