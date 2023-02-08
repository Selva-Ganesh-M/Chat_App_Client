import React, { useState } from 'react'
import logo from "../../assets/Images/logo.ico"
import { Nav_Buttons, Profile_Menu } from "../../data";
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings.js"
import AntSwitch from "../../components/AntSwitch.js"
import { useEffect } from 'react';


const Sidebar = () => {

  const { onToggleMode } = useSettings()
  const [selectedNavLink, setSelectedNavLink] = useState(0)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // effects
  useEffect(() => {
    console.log("anchorEl:", anchorEl)
    console.log("open:", open)
  }, [anchorEl, open])

  // grabbing theme
  const theme = useTheme()

  return (
    <>
      {/* left side bar - wrapper */}
      <Box
        padding={2}
        sx={{ height: "100vh", backgroundColor: theme.palette.background.paper, width: 100, boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {/* container */}
        <Stack direction={"column"} justifyContent={"space-between"} height={"100%"}>
          {/* top part */}
          <Stack direction={"column"} alignItems={"center"} sx={{ width: "100%" }} spacing={3}>
            {/* logo */}
            <Box
              sx={{ height: 64, width: 64, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
              <img src={logo} alt="logo" />
            </Box>

            {/* nav stack */}
            <Stack direction={"column"} alignItems={"center"} spacing={3}>
              {/* nav items */}
              {
                Nav_Buttons.map(item => {
                  // condition deciding the active and inactive icon buttons
                  return selectedNavLink === item.index ? (
                    // active item
                    <Box
                      key={item.index}
                      sx={{ width: "max-content", backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                    >
                      <IconButton key={item.index} sx={{ color: "#fff" }}>
                        {item.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    // inactive items
                    <IconButton
                      key={item.index}
                      onClick={() => setSelectedNavLink(item.index)}
                      sx={{ color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>
                      {item.icon}
                    </IconButton>
                  )
                }
                )
              }
              {/* divider */}
              <Divider width={"100%"} />

              {/* settings gear */}
              {
                selectedNavLink === 3 ? (
                  // active
                  <Box
                    sx={{ width: "max-content", backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                  >
                    <IconButton sx={{ color: "#fff" }}>
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  // inactive
                  <IconButton
                    onClick={() => setSelectedNavLink(3)}
                    sx={{ color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} >
                    <Gear />
                  </IconButton>
                )
              }
            </Stack>
          </Stack>

          {/* bottom part */}
          <Stack direction={"column"} alignItems={"center"} spacing={3}>
            {/* mode toggler switch */}
            <AntSwitch defaultChecked onClick={() => onToggleMode()} />

            {/* user icon */}
            <IconButton
              id="profile-btn"
              aria-controls={open ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar src={faker.image.avatar()} />
            </IconButton>

            {/* menu */}
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'profile-btn',
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            >
              <Stack spacing={1}>
                {
                  Profile_Menu.map((item, index) => (
                    <MenuItem onClick={handleClose} key={index} >
                      <Stack spacing={1} direction={"row"} alignItems={"center"}>
                        <span>
                          {item.icon}
                        </span>
                        <span>
                          {item.title}
                        </span>

                      </Stack>
                    </MenuItem>
                  ))
                }
              </Stack>

            </Menu>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Sidebar