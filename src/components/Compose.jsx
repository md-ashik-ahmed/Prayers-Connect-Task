import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import pen from "../assets/images/pen.png";
import { TextField } from "@mui/material";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "65%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "400px",
  minHeight: "505px",
  bgcolor: "background.paper",
  padding: "19px",
  borderRadius: "20px",
};

const Compose = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          height: "54px",
          marginLeft: "19px",
          marginRight: "19px",
          width: "150px",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#BEE0FF",
        }}
      >
        <span style={{ paddingLeft: "10px" }}>
          <CreateIcon />
        </span>
        {/* <img src={pen} style={{ width: "14px", marginLeft: "38px" }} /> */}
        <h4 style={{ marginLeft: "23px", fontWeight: "400", fontSize: "20px" }}>
          Compose
        </h4>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              backgroundColor: "#EDF9FF",
              position: "absolute",
              top: "0",
              left: "0",
              width: "600px",
              padding: "15px",
              borderRadius: "30px",
            }}
          >
            New Message
          </Typography>
          <TextField
            variant="standard"
            label="To"
            sx={{ width: "580px", marginTop: "19px" }}
          />
          <br />
          <TextField
            variant="standard"
            label="Subject"
            sx={{ width: "580px" }}
          />
          <br />
          <TextField
            multiline
            rows={10}
            sx={{ width: "600px", "& fieldset": { border: "none" } }}
          />
          <br />
          <Box
            sx={{
              display: "flex",
              justifyItems: "center",
              pt: "45px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "18px",
                paddingX: "22px",
              }}
            >
              Send
            </Button>
            <Box
              sx={{
                marginLeft: "20px",
                display: "flex",
                gap: "15px",
                cursor: "pointer",
              }}
            >
              <FormatColorTextIcon />
              <AttachFileIcon />
              <InsertLinkIcon />
              <EmojiEmotionsIcon />
              <AddToDriveIcon />
              <ImageIcon />
              <CreateIcon />
              <MoreVertIcon />
            </Box>
            <Box
              sx={{
                marginLeft: "160px",
                cursor: "pointer",
              }}
            >
              <DeleteIcon />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Compose;
