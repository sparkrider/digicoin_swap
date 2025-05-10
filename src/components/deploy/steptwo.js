import TokenDataSet from "../inputform/tokendataset";

const StepTwo = () => {
  return (
    <div className="flex flex-col gap-[10px] w-[780px]">
      <span className="w-full h-[89px] px-[20px] py-[30px] font-sans font-[590px] text-[24px] leading-[28.64px] text-[#EAEAEA]">
        Tax Data
      </span>
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Buy LP Fee"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
        <TokenDataSet
          content={"Sell LP Fee"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
      </div>
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Buy Dev Fee"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
        <TokenDataSet
          content={"Sell Dev Fee"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
      </div>
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Buy LP Fee (Anti Snipe)"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
        <TokenDataSet
          content={"Sell LP Fee (Anti Snipe)"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
      </div>
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Buy Dev Fee (Anti Snipe)"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
        <TokenDataSet
          content={"Sell Dev Fee (Anti Snipe)"}
          unit={"%"}
          width={"40px"}
          placeholder={"0"}
        />
      </div>
      <TokenDataSet
        content={"Treasury Address"}
        placeholder={"0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97"}
      />
    </div>
  );
};
export default StepTwo;
