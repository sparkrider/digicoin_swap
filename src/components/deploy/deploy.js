import { useState, useEffect } from "react";
import StepOne from "./stepone";
import StepThree from "./stepthree";
import StepTwo from "./steptwo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Deploy = () => {
  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
    };
  }, []);
  const [currentStep, setCurrentStep] = useState(0);
  const dots = ["1", "2", "3"];
  const nextStep = () => {
    const lastStep = currentStep === 2;
    const newStep = lastStep ? 0 : currentStep + 1;
    setCurrentStep(newStep);
  };
  const prevStep = () => {
    const firstStep = currentStep === 0;
    const newStep = firstStep ? 2 : currentStep - 1;
    setCurrentStep(newStep);
  };
  return (
    <div className="relative md:block hidden max-w-[800px] h-[660px] mx-auto rounded-[10px] border-[3px] p-[10px] bg-[#161619] border-[#6285D54D] drop-shadow-[0_0_200px_rgba(98,133,213,0.3)] overflow-hidden ">
      <div
        className=" duration-500 ease-in-out flex absolute transition-all gap-[20px]"
        style={{
          //   transform: `translateX( ${currentStep * 100}%)`,
          left: `${8 - currentStep * 800}px`,
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full px-[20px] pb-[10px] mt-[31px] flex flex-col gap-[15px] ">
        <div
          className={`w-full flex ${
            currentStep === 0 ? "justify-end" : "justify-between"
          }`}
        >
          <button
            className={`w-[50px] h-[50px] rounded-[10px] flex justify-center items-center bg-[#6285D54D] ${
              currentStep === 0 ? "hidden" : "block"
            }`}
            onClick={() => prevStep()}
          >
            <img src="./assets/images/LeftArrow.png" alt="leftarrow" />
          </button>
          <button
            className={`w-[50px] h-[50px] rounded-[10px] flex justify-center items-center bg-[#6285D54D] ${
              currentStep === 2 ? "hidden" : "block"
            }`}
            onClick={() => nextStep()}
          >
            <img src="./assets/images/RightArrow.png" alt="rightarrow" />
          </button>
          <button
            className={`w-[182px] h-[50px] rounded-[10px] bg-[#6285D54D] font-sans font-[590px] text-[18px] leading-[21.48px] text-[#6285D5] ${
              currentStep === 2 ? "block" : "hidden"
            }`}
          >
            Deploy
          </button>
        </div>
      </div>
      <div className="w-[740px] h-[5px] mx-auto flex justify-center absolute bottom-[10px] left-0 right-0 gap-[5px]">
        {dots.map((item, index) => (
          <div
            className={` h-[5px] rounded-[2px] transition-all duration-500 ease-in-out ${
              currentStep === index
                ? "w-[30px] bg-[#6285D5]"
                : "w-[15px] bg-[#363636]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Deploy;
