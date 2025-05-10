import { useContext } from "react";
import GButton from "./button/gbutton";
import SearchBar from "./searchbar";
import MyContext from "../MyContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const { searchPanel, setSearchPanel } = useContext(MyContext);

  const btnSearchIcon = () => {
    setSearchPanel(!searchPanel);
  };

  return (
    <div className=" w-full flex  md:grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-[auto_auto] absolute sm:top-[30px] top-[33.71px] sm:px-[47.15px] _sm:px-[16px] px-[21.96px] left-0 ">
      <div className="flex sm:flex-1">
        <img
          src="./assets/images/Logo.png"
          alt="logo"
          className="z-10 cursor-pointer w-[51px] h-[51px]"
        />
      </div>
      <div className="md:block hidden z-[10] row-span-2">
        <SearchBar />
      </div>

      <div className="flex flex-1 justify-end z-10">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/Search Icon.png"
            alt="search"
            className="md:hidden block cursor-pointer w-6 h-6"
            onClick={btnSearchIcon}
          />
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className="bg-[#6285D54D] text-[#6285D5] hover:bg-[#6284d5a6] hover:text-[#b0c4f3] rounded-[10px] w-[135px] h-[40px] text-sm font-semibold"
                        >
                          Connect
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="bg-red-500 text-white rounded-md w-[135px] h-[50px] text-sm font-semibold"
                        >
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="bg-gray-200 text-gray-800 rounded-md px-2 py-1 text-xs hidden md:flex items-center"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="bg-blue-500 text-white rounded-md w-[135px] h-[50px] text-sm font-semibold truncate px-2"
                        >
                          {account.displayName}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </div>
  );
};

export default Header;
