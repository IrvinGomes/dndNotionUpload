import { Box } from "@mui/material";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TabPanel from "./components/TabPanel/TabPanel";
import { useState } from "react";
import Items from "./pages/Items";
import Monsters from "./pages/Monsters";
import Home from "./pages/Home";

function App() {
  const [value, setValue] = useState(0);

  const handleTab = (tab: number) => {
    setValue(tab);
  };

  return (
    <Box display={"flex"}>
      <Sidebar handleTab={handleTab} value={value} />
      <Box width={"100%"}>
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Items />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Monsters />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;
