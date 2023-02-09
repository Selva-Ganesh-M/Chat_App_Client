import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Chats from "./Chats";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/conversation";
import Contact from "../../components/RightSwitchingSections/Contact";
import { closeSidebar, getApp, toggleSidebar } from "../../redux/slices/app.slice";
import { useDispatch, useSelector } from "react-redux";
import SharedMedia from "../../components/RightSwitchingSections/SharedMedia";
import Starred from "../../components/RightSwitchingSections/Starred";

const GeneralApp = () => {

  const theme = useTheme();
  const app = useSelector(getApp);
  const dispatch = useDispatch()
  // side-effects
  useEffect(() => {
    // runs only on app's startup
    dispatch(dispatch(closeSidebar()))
  }, [])

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
            () => {
              switch (app.sidebar.type) {
                case "CONTACT":
                  return <Contact />
                case "SHARED":
                  return <SharedMedia />
                case "STARRED":
                  return <Starred />
                default:
                  return <Contact />

              }
            }
          )()
        }
      </Stack>
    </>
  );
};

export default GeneralApp;
