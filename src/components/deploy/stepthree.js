import TokenDataSet from "../inputform/tokendataset";

const StepThree = () => {
  return (
    <div className="flex flex-col gap-[10px] w-[780px]">
      <span className="w-full h-[89px] px-[20px] py-[30px] font-sans font-[590px] text-[24px] leading-[28.64px] text-[#EAEAEA]">
        Deploy Data
      </span>
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Creator Token Supply"}
          placeholder={"0"}
          unit={"%"}
          width={"30px"}
        />
        <TokenDataSet
          content={"Liquidity"}
          placeholder={"0"}
          unit={"ETH"}
          width={"30px"}
        />
      </div>
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Creator Token Supply"}
          placeholder={"0"}
          unit={"Blocks"}
          width={"30px"}
        />
        <TokenDataSet
          content={"Max Tx Amount"}
          placeholder={"0"}
          unit={"%"}
          width={"30px"}
        />
        <TokenDataSet
          content={"Max Wallet Amount"}
          placeholder={"0"}
          unit={"%"}
          width={"30px"}
        />
      </div>
    </div>
  );
};
export default StepThree;
