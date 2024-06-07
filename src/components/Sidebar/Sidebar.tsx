import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Drawer, DrawerHeader } from "./Drawer";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MonsterIcon from "../../icons/MonsterIcon";
import ItemsIcon from "../../icons/ItemIcon";
import DnDLogo from "../../icons/dndLogo";

export const Sidebar: React.FC<any> = () => {
  const listMenu = ["Items", "Monsters"];
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 1,
              ml: 2,
              justifyContent: "center",
              opacity: open ? 1 : 0,
            }}
          >
            <DnDLogo />
          </ListItemIcon>
          <ListItemText
            primary={"DnD to Notion"}
            sx={{ opacity: open ? 1 : 0 }}
          />
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
            }}
          >
            <IconButton onClick={toggleDrawer(!open)}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </ListItemIcon>
        </DrawerHeader>
        <Divider />
        <List>
          {listMenu.map((item: string) => (
            <ListItem key={item} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item == "Monsters" ? <MonsterIcon /> : <ItemsIcon />}
                </ListItemIcon>
                <ListItemText primary={item} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
