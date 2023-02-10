import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledBadge } from "../Badge/StyledBadge";
import {
  getApp,
  showSidebar,
  updateSidebarType,
} from "../../redux/slices/app.slice";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const app = useSelector(getApp);
  return (
    <>
      {/* section - header '''''''''''''''''''''''''''''''''''''''''' */}
      <Box
        width={"100%"}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        {/* header container */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
        >
          {/* LEFT: image + name & status */}
          <Stack
            direction={"row"}
            gap={2}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(updateSidebarType("CONTACT"));
              if (!app.sidebar.open) {
                dispatch(showSidebar());
              }
            }}
          >
            {/* part - image */}
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>

            {/* part - name + status */}
            <Stack>
              {/* name */}
              <Typography variant={"subtitle2"}>
                {faker.name.fullName()}
              </Typography>

              {/* status */}
              <Typography variant={"caption"}>Online</Typography>
            </Stack>
          </Stack>

          {/* RIGHT - Group */}
          <Stack direction={"row"} gap={3}>
            {/* left - 3 icons */}
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>

            {/* divider */}
            <Divider orientation="vertical" height={"100%"} flexItem />

            {/* right */}
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
