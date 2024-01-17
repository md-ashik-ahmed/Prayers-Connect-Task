import { AccountBox, Article, Person } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReportIcon from "@mui/icons-material/Report";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
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
                  <MailOutlineIcon />
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
                  <AccessTimeIcon />
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
                  <SendIcon />
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
                    <PriorityHighIcon />
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
                    <EmailIcon />
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
                    <ReportIcon />
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
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Trash"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          {/* =================================================================== */}

          <ListItem disablePadding>
            <ListItemButton component="a" href="#level">
              <ListItemIcon>
                <ListItemText
                  primary="Level"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
                <AddIcon style={{ paddingLeft: "20px" }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
