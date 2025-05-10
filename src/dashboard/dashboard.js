import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/header";
import MenuBar from "../components/menubar";
import Swap from "../components/swap";
import Liquidity from "../components/liquidity";
import Rewards from "../components/rewards";
import Deploy from "../components/deploy/deploy";
import MyContext from "../MyContext";
import SearchPanel from "../components/searchpanel";
import DropModal from "../components/inputform/dropmodal";
import Stars from "../components/particle";
import { useAccount, useEnsName } from "wagmi";

// Animated wrapper component
const AnimatedPage = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 50, // Start 50px to the right
    },
    in: {
      opacity: 1,
      x: 0, // End at its normal position
    },
    out: {
      opacity: 0,
      x: -50, // Exit 50px to the left
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

const Dashboard = () => {
  const { address } = useAccount();
  const { modal, setModal } = useContext(MyContext);
  const { searchPanel, setSearchPanel } = useContext(MyContext);
  const { tranStatus, setTranStatus } = useContext(MyContext);
  const location = useLocation();

  return (
    <div className="relative w-full h-[1080px] md:rounded-[3px] rounded-[0px] bg-[#0F0F11] sm:px-[47.15px] px-[21.96px] _sm:px-[16px] py-[30px] overflow-hidden flex flex-col md:justify-center">
      <div
        className={`w-full absolute right-full top-0 bottom-0 z-20 transition-all duration-500 ease-in-out md:hidden block ${
          searchPanel ? "translate-x-full" : " "
        }`}
      >
        <SearchPanel />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Stars />
      </div>

      <Header />
      <div
        className={`modal ${modal ? "block" : "hidden"} backdrop-blur-[5px] `}
        onClick={() => setModal(!modal)}
      ></div>
      <DropModal />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Swap />
              </AnimatedPage>
            }
          />
          <Route
            path="/liquidity"
            element={
              <AnimatedPage>
                <Liquidity />
              </AnimatedPage>
            }
          />
          <Route
            path="/rewards"
            element={
              <AnimatedPage>
                <Rewards />
              </AnimatedPage>
            }
          />
          <Route
            path="/deploy"
            element={
              <AnimatedPage>
                <Deploy />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>

      <div className="w-full bottom-[30px] absolute left-0 right-0 sm:px-[47.15px] px-[21.96px] _sm:px-[16px] ">
        <MenuBar />
      </div>
    </div>
  );
};

const DashboardWrapper = () => (
  <Router>
    <Dashboard />
  </Router>
);

export default DashboardWrapper;
