import { useEffect, useState } from "react";
import InputFile from "../components/InputFile/InputFile";
import { Box, Typography } from "@mui/material";
import { CreateDBProperties, getAllKeys } from "../libs/Objetification";
import TransferList from "../components/TransferList/TransferList";

interface CsvData {
  [key: string]: string;
}

export const Monsters: React.FC<any> = () => {
  const [csvData, setCsvData] = useState<CsvData[] | null>(null);
  const [keys, setKeys] = useState<[]>();

  useEffect(() => {
    if (csvData && csvData.length > 0) {
      const extractedKeys = getAllKeys(csvData[0]);
      setKeys(extractedKeys);
      csvData.forEach((line) => {
        CreateDBProperties(line);
      });
    }
  }, [csvData]);

  return (
    <Box>
      <InputFile setCsvData={setCsvData} />
      {csvData && (
        <Box mt={2}>
          {keys && keys.length > 0 && (
            <Box>
              <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                Select the DB fields
              </Typography>
              <TransferList keys={keys} />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Monsters;
