import {
  AccountBox,
  Article,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Compose from "./Compose";
import Message from "./Compose";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      flex={1}
      p={3}
      pr={10}
      sx={{ backgroundColor: "#E4EFFA", height: "h-screen" }}
    >
      <Box position="fixed">
        <List>
          <Message />
          {/* <Message /> */}
          <Box>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#inbox">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary="Inbox"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#starred">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText
                  primary="Starred"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#snoozed">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText
                  primary="Snoozed"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#send">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText
                  primary="Send"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
          </Box>

          {/* ============================================ */}
          <Accordion
            expanded={isExpanded}
            onChange={toggleExpansion}
            sx={{ backgroundColor: "#E4EFFA" }}
          >
            <ListItem disablePadding sx={{ margin: 0, padding: 0 }}>
              <ListItemButton component="a" href="#more">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-content"
                  id="panel-header"
                ></AccordionSummary>
                <ListItemText
                  primary="More"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
              </ListItemButton>
            </ListItem>
            <AccordionDetails>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#drafts">
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText
                    primary="Drafts"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component="a" href="#important">
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText
                    primary="Important"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#chats">
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText
                    primary="Chats"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#allmail">
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText
                    primary="All Mail"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#spam">
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText
                    primary="Spam"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#trash">
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText
                    primary="Trash"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#chats">
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText
                    primary="Chats"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          {/* =================================================================== */}

          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
