import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Post from "./Mail";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const Tabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <IconButton sx={{ paddingLeft: 4 }}>
        <CheckBoxOutlineBlankOutlinedIcon />
      </IconButton>
      <TabContext value={value}>
        <Box sx={{ paddingLeft: 3, borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Primary" value="1" />
            <Tab label="Promotions" value="2" />
            <Tab label="Social" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabPanel>
        <TabPanel value="2">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabPanel>
        <TabPanel value="3">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default Tabs;
