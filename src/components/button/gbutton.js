import { useState } from "react";

const GButton = ({
  content,
  btncolor,
  txtcolor,
  hoverBgColor,
  hoverTextColor,
  onclick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="w-full h-[50px] rounded-[10px] py-[10px] flex justify-center items-center transform transition-transform duration-150 active:scale-95"
      onClick={onclick}
      onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Remove hover state on mouse leave
      style={{
        background: isHovered ? hoverBgColor : btncolor, // Change background on hover
        color: isHovered ? hoverTextColor : txtcolor, // Change text color on hover
      }}
    >
      <span className="font-sans font-bold text-[18px] leading-[21.48px]">
        {content}
      </span>
    </button>
  );
};
export default GButton;
