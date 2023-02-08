import { Stack } from "@mui/system";
import React from "react";
import Chats from "./Chats";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Contact from "../../components/contact/Contact";

const GeneralApp = () => {

  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} width={"100%"} >
        {/* section - chats */}
        <Chats />
        {/* section - conversations */}
        <Box
          sx={{
            width: "calc(100vw - 720px)",
            backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default,
          }}>
          <Conversation />
        </Box>

        {/* section - contact */}
        <Contact width={"320px"} />
      </Stack>
    </>
  );
};

export default GeneralApp;
