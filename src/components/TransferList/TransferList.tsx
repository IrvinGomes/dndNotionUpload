import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CustomList from "./CustomList";

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export const TransferList: React.FC<any> = ({ keys }) => {
  const [checked, setChecked] = React.useState<readonly string[]>([]);
  const [left, setLeft] = React.useState<readonly string[]>(keys);
  const [right, setRight] = React.useState<readonly string[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

//   const handleAllRight = () => {
//     setRight(right.concat(left));
//     setLeft([]);
//   };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

//   const handleAllLeft = () => {
//     setLeft(left.concat(right));
//     setRight([]);
//   };

  return (
    <Grid container spacing={0} justifyContent="center" alignItems="center">
      <Grid item xs={5}>{CustomList(left, checked, setChecked)}</Grid>
      <Grid item xs={2}>
        <Grid container direction="column" alignItems="center">
          {/* <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button> */}
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          {/* <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button> */}
        </Grid>
      </Grid>
      <Grid item xs={5}>{CustomList(right, checked, setChecked)}</Grid>
    </Grid>
  );
};

export default TransferList;
