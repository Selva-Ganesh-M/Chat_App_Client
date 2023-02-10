import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BellSimple,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar, updateSidebarType } from "../../redux/slices/app.slice";
import AntSwitch from "../AntSwitch";
import { GeneralDilogue } from "../Dilogues/Dilogues";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // handling block button
  const [Block, setBlock] = React.useState(false);

  const handleBlockOpen = () => {
    setBlock(true);
  };

  const handleBlockClose = () => {
    setBlock(false);
  };

  // handle delete button
  const [Delete, setDelete] = React.useState(false);

  const handleDeleteOpen = () => {
    setDelete(true);
  };

  const handleDeleteClose = () => {
    setDelete(false);
  };

  return (
    // cotact info - wrapper
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
            fullWidth
            justifyContent={"space-between"}
            px={2}
          >
            {/* typography */}
            <Typography variant={"article"}>Contact Info</Typography>
            {/* icon */}
            <IconButton onClick={() => dispatch(toggleSidebar())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* body */}
        <Box
          px={1.5}
          pb={3}
          width={"100%"}
          sx={{ overflowY: "scroll", position: "relative" }}
        >
          <Stack spacing={2}>
            {/* group: profile + calling */}
            <Stack
              py={1.5}
              spacing={2}
              sx={{
                position: "sticky",
                top: "0",
                backgroundColor: theme.palette.background.default,
              }}
            >
              {/* section: profile */}
              <Box fullWidth>
                <Stack direction={"row"} gap={2} alignItems="center">
                  {/* iamge */}
                  <Box>
                    <IconButton>
                      <img
                        height={"60px"}
                        width="60px"
                        src={faker.image.people()}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        alt="user-img"
                      />
                    </IconButton>
                  </Box>
                  {/* name and number */}
                  <Stack gap={1}>
                    <Typography variant={"body2"} fontWeight={600}>
                      Selva Ganesh M
                    </Typography>
                    <Typography variant={"caption"}>+91 90033 58985</Typography>
                  </Stack>
                </Stack>
              </Box>

              {/* section: calling */}
              <Box fullWidth>
                <Stack
                  direction={"row"}
                  gap={3}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack alignItems={"center"}>
                    <IconButton>
                      <VideoCamera />
                    </IconButton>
                    <Typography variant={"caption"}>Video</Typography>
                  </Stack>

                  <Stack alignItems={"center"}>
                    <IconButton>
                      <Phone />
                    </IconButton>
                    <Typography variant={"caption"}>Video</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            {/* divider */}
            <Divider fullWidth flexItem />

            {/* section: about */}
            <Stack gap={1}>
              <Typography variant="subtitle2">About</Typography>
              <Typography variant={"caption"}>
                Hey there, I'm using this app.
              </Typography>
            </Stack>

            {/* divider */}
            <Divider fullWidth flexItem />

            {/* section: media */}
            <Stack gap={2} sx={{ position: "relative" }}>
              {/* header */}
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant={"subtitle2"}>
                  Media, links and docs
                </Typography>
                <Button
                  endIcon={<CaretRight />}
                  onClick={() => dispatch(updateSidebarType("SHARED"))}
                >
                  201
                </Button>
              </Stack>

              {/* images */}
              <Stack
                width={"100%"}
                direction={"row"}
                gap={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {[1, 2, 3].map((item) => (
                  <Box width={100}>
                    <IconButton>
                      <img
                        style={{ width: "100%", objectFit: "cover" }}
                        src={faker.image.people()}
                        alt={faker.name.fullName()}
                      />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            </Stack>

            {/* divider */}
            <Divider fullWidth flexItem />

            {/* section: starred */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} gap={2} alignItems={"center"}>
                <Star />
                <Typography variant={"subtitle2"}>Starred Messages</Typography>
              </Stack>

              <IconButton
                onClick={() => dispatch(updateSidebarType("STARRED"))}
              >
                <CaretRight size={20} />
              </IconButton>
            </Stack>

            {/* divider */}
            <Divider fullWidth flexItem />

            {/* section: mute notification */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} gap={2} alignItems={"center"}>
                <BellSimple />
                <Typography variant={"subtitle2"}>Mute Notification</Typography>
              </Stack>

              <IconButton>
                <AntSwitch defaultChecked />
              </IconButton>
            </Stack>

            {/* divider */}
            <Divider fullWidth flexItem />

            {/* section: common groups */}
            <Stack spacing={2}>
              <Typography variant="body2">1 ground in common</Typography>

              {/* group details */}
              <Stack direction="row" alignItems={"center"} gap={2}>
                {/* ground icons */}
                <IconButton>
                  <Avatar src={faker.image.people()} />
                </IconButton>

                {/* name and members */}
                <Stack>
                  <Typography variant={"subtitle2"}>
                    {faker.name.middleName()}
                  </Typography>
                  <Typography variant={"body2"}>selva, sekar, vivek</Typography>
                </Stack>
              </Stack>
            </Stack>

            {/* section: block, delete */}
            <Stack
              fullWidth
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
            >
              {/* block btn */}
              <Button
                variant={"outlined"}
                sx={{ width: "40%" }}
                startIcon={<Prohibit />}
                onClick={handleBlockOpen}
              >
                Block
              </Button>

              {/* block dilogue */}
              <GeneralDilogue
                open={Block}
                handleClose={handleBlockClose}
                question={"Do you reall want to block this contact?"}
              />

              {/* delete btn */}
              <Button
                variant={"outlined"}
                sx={{ width: "40%" }}
                startIcon={<Trash />}
                onClick={handleDeleteOpen}
              >
                Delete
              </Button>

              {/* delete dilogue */}
              <GeneralDilogue
                open={Delete}
                handleClose={handleDeleteClose}
                question={"Do you reall want to block this contact?"}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
