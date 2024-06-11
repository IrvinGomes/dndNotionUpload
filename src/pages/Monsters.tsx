import { useState } from "react";
import InputFile from "../components/InputFile/InputFile";
import { Box, Typography } from "@mui/material";

interface CsvData {
  [key: string]: string;
}

export const Monsters: React.FC<any> = () => {
  const [csvData, setCsvData] = useState<CsvData[] | null>(null);

  return (
    <Box>
      <InputFile setCsvData={setCsvData} />
      {csvData && (
        <Box mt={2}>
          <Typography variant="h6">CSV Data:</Typography>
          {csvData.map((line, index) => {
            return <pre key={index}>{JSON.stringify(line)}</pre>;
          })}
        </Box>
      )}
    </Box>
  );
};

export default Monsters;
