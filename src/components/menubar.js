import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MenuBar = () => {
  const menuitems = ["Swap", "Liquidity", "Rewards", "Deploy"];
  const menuitem = ["Swap", "Liquidity", "Rewards"];
  const location = useLocation();

  const getActiveIndex = () => {
    const path = location.pathname.slice(1);
    if (path === "") return 0;
    const index = menuitems.findIndex((item) => item.toLowerCase() === path);
    return index !== -1 ? index : 0;
  };

  const [currentPage, setPage] = useState(getActiveIndex());

  const btnClk = (index) => {
    setPage(index);
  };

  return (
    <div>
      <nav className="max-w-[804.7px] mx-auto h-[60px] rounded-[15px] md:flex gap-[5px] p-[5px] bg-[#212123] hidden relative ">
        {menuitems.map((item, index) => (
          <Link
            key={index}
            to={`/${index === 0 ? "" : item.toLowerCase()}`}
            className={`w-full py-[14.5px] flex items-center justify-center font-sans font-[590] text-[18px] leading-[21.48px] rounded-[10px] relative z-10 ${
              currentPage === index ? "text-[#6285D5]" : "text-[#616161]"
            }`}
            onClick={() => btnClk(index)}
          >
            {item}
          </Link>
        ))}
        <motion.div
          className="absolute top-[5px] bottom-[5px] rounded-[10px] bg-[#6285D54D] md:block hidden"
          initial={false}
          animate={{
            width: `calc((100% - 25px)/${menuitems.length})`,
            x: `calc(${currentPage} *100% + 5px *${currentPage})`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </nav>
      <nav className="max-w-[804.7px] mx-auto h-[60px] rounded-[15px] md:hidden gap-[5px] p-[5px] bg-[#212123] flex relative ">
        {menuitem.map((item, index) => (
          <Link
            key={index}
            to={`/${index === 0 ? "" : item.toLowerCase()}`}
            className={`w-full py-[14.5px] flex items-center justify-center font-sans font-[590] text-[18px] leading-[21.48px] rounded-[10px] relative z-10 ${
              currentPage === index ? "text-[#6285D5]" : "text-[#616161]"
            }`}
            onClick={() => btnClk(index)}
          >
            {item}
          </Link>
        ))}
        <motion.div
          className="absolute top-[5px] bottom-[5px] rounded-[10px] bg-[#6285D54D] "
          initial={false}
          animate={{
            width: `calc((100% - 25px)/${menuitem.length})`,
            x: `calc(${
              currentPage === 3 ? -2 : currentPage
            } *100% + 6.5px *${currentPage})`,
          }}
        />
      </nav>
    </div>
  );
};

export default MenuBar;
