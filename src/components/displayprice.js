import DropDown from "./button/dropdown";

const DisplayPrice = ({ price, bgcolor, balance, type }) => {
  return (
    <div
      className="w-full h-[139px] rounded-[10px] flex flex-col gap-y-[15px] p-[15px] border-[1px] border-[#45454580]"
      style={{ background: bgcolor }}
    >
      <div className="w-full h-[19px] flex justify-between">
        <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161] ">
          You Pay
        </span>
        <div className="flex justify-between gap-[5px]">
          <span className="font-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161]">
            Balance: {balance}
          </span>
          <span className="font-sans font-[590px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px]  text-[#6285D5] cursor-pointer">
            Max
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between items-center ">
        <input
          className="w-1/2 pr-font placeholder-[#EAEAEA] outline-none border-none"
          style={{ background: "transparent" }}
          placeholder="0"
          type="text"
        ></input>
        {type === 0 ? (
          <div className="flex justify-between items-center gap-[10px]">
            <img src="./assets/images/ethereum.png" alt="ethereum" />
            <span className="font-sans font-[590px] text-[18px] leading-[21.48px] text-[#EAEAEA]">
              ETH
            </span>
          </div>
        ) : type === 1 ? (
          <DropDown width={"164px"} borderSize={"1px"} bgColor={"#29292C8C"} />
        ) : (
          <div className="flex justify-between items-center gap-[10px]">
            <img
              src="./assets/images/ETHL.png"
              alt="ethl"
              className="sm:block hidden"
            />
            <span className="font-sans font-[590px] text-[18px] leading-[21.48px] text-[#EAEAEA]">
              ETH/VISION
            </span>
          </div>
        )}
      </div>
      <span className="w-fullfont-sans font-[400px] sm:leading-[19.09px] leading-[16.71px] sm:text-[16px] text-[14px] text-[#616161] text-left">
        {price}
      </span>
    </div>
  );
};
export default DisplayPrice;
