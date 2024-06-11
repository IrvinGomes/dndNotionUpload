import React, { useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DropzoneBox } from "./DropzoneBox";
import { useDropzone } from "react-dropzone";
import UploadIcon from "@mui/icons-material/Upload";
import Papa from "papaparse";

interface CsvData {
  [key: string]: string;
}

export const InputFile: React.FC<any> = ({ setCsvData }) => {
  const [fileName, setFileName] = useState<string>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFileName(file.name);
      Papa.parse<CsvData>(file, {
        header: true,
        complete: (results) => {
          setCsvData(results.data);
        },
      });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
    multiple: false,
  });

  return (
    <Box>
      <DropzoneBox {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadIcon fontSize="large" />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Drag & drop a CSV file here, or click to select one
        </Typography>
      </DropzoneBox>
      {fileName && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          Selected file: {fileName}
        </Typography>
      )}
    </Box>
  );
};

export default InputFile;
