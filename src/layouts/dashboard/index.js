
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, Switch, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useSettings from "../../hooks/useSettings.js"

// custom
import logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";


// other declarations

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


// React FC
const DashboardLayout = () => {
  //#region : declarations

  //#endregion

  //#region : hooks
  const theme = useTheme()
  const { onToggleMode } = useSettings()
  //#endregion

  //#region : custom-declarations
  const [selectedNavLink, setSelectedNavLink] = useState(0)
  //#endregion

  //#region : side-effects

  //#endregion

  //#region : functions

  //#endregion

  //jsx rendering

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
            <IconButton>
              {<Avatar src={faker.image.avatar()} />}
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
      {/* Outlet */}
      <Outlet />
    </>
  );
};

export default DashboardLayout;
