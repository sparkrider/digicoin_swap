import "./App.css";
import Dashboard from "./dashboard/dashboard";
import { MyContextProvider } from "./MyContext";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultConfig,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: "blur(8px)",
  },
  colors: {
    accentColor: "#6285D54D",
    accentColorForeground: "#6285D5",
    actionButtonBorder: "#45454580",
    actionButtonBorderMobile: "#45454580",
    actionButtonSecondaryBackground: "#6285D54D",
    closeButton: "#EAEAEA",
    closeButtonBackground: "#6285D54D",
    connectButtonBackground: "#45454580",
    connectButtonBackgroundError: "#FF6B6B",
    connectButtonInnerBackground: "#4A5568",
    connectButtonText: "#EAEAEA",
    connectButtonTextError: "#EAEAEA",
    connectionIndicator: "#4A5568",
    downloadBottomCardBackground: "#EAEAEA",
    downloadTopCardBackground: "#F7FAFC",
    error: "#FF6B6B",
    generalBorder: "#45454580",
    generalBorderDim: "#CBD5E0",
    menuItemBackground: "#6285D5",
    modalBackdrop: "rgba(0,0,0,0.5)",
    modalBackground: "#1A202C",
    modalBorder: "#2D3748",
    modalText: "#E2E8F0",
    modalTextDim: "#A0AEC0",
    modalTextSecondary: "#718096",
    profileAction: "#45454580",
    profileActionHover: "#45454580",
    profileForeground: "#45454580",
    selectedOptionBorder: "#45454580",
    standby: "#FFD700",
  },
  fonts: {
    body: "system-ui, sans-serif",
  },
  radii: {
    actionButton: "8px",
    connectButton: "8px",
    menuButton: "8px",
    modal: "16px",
    modalMobile: "16px",
  },
  shadows: {
    connectButton: "0 0 10px rgba(0,0,0,0.2)",
    dialog: "0 0 20px rgba(0,0,0,0.3)",
    profileDetailsAction: "0 2px 4px rgba(0,0,0,0.1)",
    selectedOption: "0 0 8px rgba(0,0,0,0.15)",
    selectedWallet: "0 0 10px rgba(0,0,0,0.2)",
    walletLogo: "0 0 6px rgba(0,0,0,0.1)",
  },
};

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myCustomTheme}>
          <MyContextProvider>
            <div className="relative">
              <Dashboard />
            </div>
          </MyContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
