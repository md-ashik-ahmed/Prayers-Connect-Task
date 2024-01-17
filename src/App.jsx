import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Header />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        height="100%"
      >
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}

export default App;
