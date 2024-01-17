import { Pets } from "@mui/icons-material";
import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Modal,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#F9F9F9",
});

const style = {
  position: "absolute",
  top: "30%",
  left: "83%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "300px",
  bgcolor: "#D8E4F0",
  borderRadius: "30px",
  padding: "40px",
};

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "0 10px",
//   borderRadius: theme.shape.borderRadius,
//   width: "40%",
// }));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Gmail
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search>
          <InputBase placeholder="search..." />
        </Search> */}
        <Box
          sx={{
            marginLeft: "57px",
            display: "flex",
            alignItems: "center",
            borderRadius: "40px",
            backgroundColor: "#E4EFFA",
            width: "600px",
            height: "60px",
          }}
        >
          <SearchIcon
            sx={{
              width: "20px",
              height: "20px",
              alignItems: "center",
              marginLeft: "15px",
              color: "black",
            }}
          />
          <input
            placeholder="Search mail"
            style={{
              marginLeft: "30px",
              height: "20px",
              width: "200px",
              backgroundColor: "#E4EFFA",
              border: "none",
              outline: "none",
            }}
          />
        </Box>
        <Icons>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />

          {/* =================icon================== */}
          <Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography sx={{ textAlign: "center", fontSize: "16px" }}>
                  asikur@prayersconnect.com
                </Typography>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    alignItems: "center",
                    marginLeft: "120px",
                    my: "5px",
                  }}
                />
                <Typography sx={{ textAlign: "center", fontSize: "26px" }}>
                  Hi, Ashikur
                </Typography>
                <button
                  style={{
                    cursor: "pointer",
                    border: "1px solid white",
                    borderRadius: "40px",
                    marginTop: "20px",
                    fontSize: "18px",
                    width: "200px",
                    height: "50px",
                    marginLeft: "70px",
                  }}
                >
                  {/* <img
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    style={{ width: "15px" }}
                  /> */}
                  Signout
                </button>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "80",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  Privacy Policy Terms of Service
                </Typography>
              </Box>
            </Modal>
          </Box>

          {/* ======================================== */}

          <Avatar sx={{ width: 30, height: 30 }} onClick={handleOpen} />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          {/* <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Ashik</Typography> */}
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
