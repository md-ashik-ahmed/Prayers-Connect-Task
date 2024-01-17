import { Box, Stack, Skeleton } from "@mui/material";
import { useState } from "react";
import CustomTabPanel from "./Tabs";
import Container from "@mui/material/Container";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={9} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />

          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        </Container>
      ) : (
        <>
          <CustomTabPanel />
        </>
      )}
    </Box>
  );
};

export default Feed;
