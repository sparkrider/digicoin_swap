const TokenDataSet = ({ content, unit, width, placeholder }) => {
  return (
    <div className="w-full h-[70px] rounded-[10px] p-[10px] bg-[#212123] gap-y-[10px] flex flex-col">
      <div className="flex justify-between">
        <span className="g-font">{content}</span>
        <span className="g-font">?</span>
      </div>
      <div className="flex">
        <input
          className={`ps-font outline-none border-none bg-[#212123] w-[${width}]`}
          type="text"
          placeholder={placeholder}
        />
        <span className="g-font">{unit}</span>
      </div>
    </div>
  );
};
export default TokenDataSet;
