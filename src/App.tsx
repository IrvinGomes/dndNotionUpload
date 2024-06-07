import { Box } from "@mui/material";
import "./App.css";
import { InputFile } from "./components/InputFile/InputFile";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Box display={"flex"}>
      <Sidebar />
      <Box display={"flex"} width={"100%"}>
        <InputFile />
      </Box>
    </Box>
  );
}

export default App;
