import { useState, useContext } from "react";
import MyContext from "../../MyContext";
import SearchItem from "./../button/searchitem";
const DropPanel = () => {
  const tokenName = ["VisionSwap", "VisionCat", "Tar Realm"];
  const symbol = ["Timage1", "Timage2", "Timage3"];
  const pName = ["VISION", "VCAT", "TAR"];
  const { dropModal, setDropModal } = useContext(MyContext);
  const { currentDropItem, setCurrentDropItem } = useContext(MyContext);
  const btnClkPanel = () => {
    setDropModal(!dropModal);
  };
  const clkDropItem = (index) => {
    setCurrentDropItem(index);
    btnClkPanel();
  };
  return (
    <div className="w-full h-[680px] py-[15px] bg-[#212123] rounded-[20px] absolute dropdown-animation z-50 ">
      <div className="px-[5px] ">
        <div className="w-full h-[50px] px-[25px] flex justify-between items-center">
          <div className="flex gap-[20px]">
            <img src="./assets/images/Search Icon.png" alt="searchicon" />
            <input
              type="text"
              name="search"
              placeholder="Explore token"
              className="pl-[10px] max-w-[378px] h-[21px] bg-[#212123] placeholder-[#616161] border-none outline-none text-[#EAEAEA]"
            />
          </div>
          <div className="cursor-pointer" onClick={() => btnClkPanel()}>
            <img
              src="./assets/images/Frame.png"
              alt="cross"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full">
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
                onclick={() => clkDropItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropPanel;
