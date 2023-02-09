import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Chats from "./Chats";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Contact from "../../components/contact/Contact";
import { getApp } from "../../redux/slices/app.slice";
import { useSelector } from "react-redux";

const GeneralApp = () => {

  const theme = useTheme();
  const app = useSelector(getApp);

  return (
    <>
      <Stack direction={"row"} width={"100%"} >
        {/* section - chats */}
        <Chats />
        {/* section - conversations */}
        <Box
          sx={{
            width: app.sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            transition: "width 0.5",
            backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default,
          }}>
          <Conversation />
        </Box>

        {/* section - contact */}
        {
          app.sidebar.open && (
            <Contact />
          )
        }
      </Stack>
    </>
  );
};

export default GeneralApp;
