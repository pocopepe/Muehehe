import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fetchBalance from "./api"; // ✅ Import default export
import CardHistory from "./History";
import NavBar from "./NavBar";
import { MarketBuyHistory, MarketSellHistory } from "./CardList";
import Card from "./Cards";
import ProfitChart from "./ProfitChart";
import Profit from "./assets/profit.svg";
import Sunny from "./assets/sunny.svg";

function App() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function getBalance() {
      const data = await fetchBalance(); // ✅ Call fetchBalance
      setBalance(data); // ✅ Set the returned value
    }

    getBalance();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCF7]">
      {/* Navbar */}
      <motion.div
        className="bg-[#FAFCF7]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar />
      </motion.div>

      {/* Main Grid Layout */}
      <div className="flex-grow grid grid-cols-2 gap-4 p-4">
        {/* Charting Section */}
        <motion.div
          className="p-4 flex items-center justify-center rounded-lg shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
        >
          <ProfitChart />
        </motion.div>

        {/* Market History (Buy & Sell) */}
        <div className="row-span-2 grid grid-cols-2 gap-4 p-4">
          <motion.div
            className="flex items-center justify-center p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
          >
            <MarketBuyHistory />
          </motion.div>
          <motion.div
            className="flex items-center justify-center p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
          >
            <MarketSellHistory />
          </motion.div>
        </div>

        {/* Profit & Surplus Cards */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="flex items-center justify-center p-2 shadow-md rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
          >
            <Card
              title="Balance"
              value={balance === null ? "Loading..." : balance === "Error" ? "Error" : `${balance}`}
              description="Avg daily earnings: -"
              highlightColor="#00ca4e"
              icon={Profit}
              className="w-2/3 max-w-xs"
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-center p-2 shadow-md rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
          >
            <Card
              title="Net Power Surplus"
              value="150 kWh"
              description="Difference: 50 kWh"
              highlightColor="#00ca4e"
              icon={Sunny}
              className="w-2/3 max-w-xs"
            />
          </motion.div>
        </div>
      </div>

      {/* Card History at the Bottom */}
      <motion.div
        className="p-4 shadow-md rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
      >
        <CardHistory />
      </motion.div>
    </div>
  );
}

export default App;
