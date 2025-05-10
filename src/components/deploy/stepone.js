import TokenDataSet from "../inputform/tokendataset";

const StepOne = () => {
  return (
    <div className="flex flex-col w-[780px] gap-[10px]">
      <span className="w-full h-[89px] px-[20px] py-[30px] font-sans font-[590px] text-[24px] leading-[28.64px] text-[#EAEAEA]">
        Token Data
      </span>
      <div className="flex gap-[10px] ">
        <TokenDataSet content={"Name"} placeholder={"Name"} />
        <TokenDataSet content={"Symbol"} placeholder={"Symbol"} />
      </div>
      <TokenDataSet content={"Total Supply"} placeholder={"0"} />
      <div className="flex gap-[10px] ">
        <TokenDataSet
          content={"Project URL"}
          placeholder={"https://www.peipei.gg"}
        />
        <TokenDataSet
          content={"Image URL"}
          placeholder={"https://www.ipfs.com/a382a8b8c9258afa"}
        />
      </div>
      <div className="w-full h-[200px] rounded-[10px] p-[10px] bg-[#212123] flex flex-col gap-[10px]">
        <div className="w-full flex justify-between">
          <span className="g-font">Description</span>
          <span className="g-font">?</span>
        </div>
        <textarea
          className="font-sans font-[510px] text-[18px] leading-[21.48px] text-[#EAEAEA] outline-none border-none bg-[#212123] h-screen bg-scroll resize-none no-scrollbar"
          id="description"
          name="description"
          placeholder="write something......"
        ></textarea>
      </div>
    </div>
  );
};
export default StepOne;
