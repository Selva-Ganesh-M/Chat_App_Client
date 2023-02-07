import { Stack } from "@mui/system";
import React from "react";
import Chats from "./Chats";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";

const GeneralApp = () => {

  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} width={"100%"} >
        {/* section - chats */}
        <Chats />
        {/* section - conversations */}
        <Box sx={{ width: "calc(100vw - 420px)", backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default }}>
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
