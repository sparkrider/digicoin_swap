const SearchItem = ({
  tokenName,
  symbol,
  pName,
  tokenPrice,
  address,
  onclick,
}) => {
  return (
    <div
      className="w-full h-[50px] py-[5.5px] px-[25px] bg-[#212123E5] hover:bg-[#303031] flex justify-between"
      onClick={onclick}
    >
      <div className="flex gap-[10px]">
        <img src={`./assets/images/tokenitems/${symbol}.png`} alt={symbol} />
        <div className="flex flex-col gap-[3px]">
          <span className="font-sans font-[510] text-[16px] leading-[19.09px] text-[#EAEAEA]">
            {tokenName}
          </span>
          <span className="g-font">{pName}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="font-[400px] text-[14px] leading-[16.71px] font-sans text-[#EAEAEA]">
          {tokenPrice}
        </span>
        <span className="font-sans font-[400px] text-[12px] leading-[14.32px] text-[#888888]">
          {address}
        </span>
      </div>
    </div>
  );
};
export default SearchItem;
