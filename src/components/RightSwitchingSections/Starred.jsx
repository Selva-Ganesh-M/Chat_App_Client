import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowLeft, X } from "phosphor-react";
import { toggleSidebar, updateSidebarType } from "../../redux/slices/app.slice";
import { useDispatch } from "react-redux";
import Message from "../conversation/Message";

const Starred = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    // starred messages - wrapper
    <Box width={"320px"} height="100vh">
      {/* stop if you see this */}

      {/* container */}
      <Stack height="100%" width={"100%"}>
        {/* header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
          p={2}
        >
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"space-between"}
            px={2}
          >
            {/* title */}
            <Typography variant="article">Starred Messages</Typography>

            {/* icon */}
            <Stack alignItems={"center"} direction={"row"}>
              {/* go back icon */}
              <IconButton
                onClick={() => {
                  dispatch(updateSidebarType("CONTACT"));
                }}
              >
                <ArrowLeft />
              </IconButton>

              {/* close icon */}
              <IconButton
                onClick={() => {
                  dispatch(toggleSidebar());
                  dispatch(updateSidebarType("CONTACT"));
                }}
              >
                <X />
              </IconButton>
            </Stack>
          </Stack>
        </Box>

        {/* body */}
        <Box
          width={"100%"}
          sx={{ flexGrow: 1, overflowY: "scroll", position: "relative" }}
        >
          <Message menu={false} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Starred;
