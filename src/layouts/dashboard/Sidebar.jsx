import React, {useState} from 'react'
import logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings.js"
import AntSwitch from "../../components/AntSwitch.js"


const Sidebar = () => {

  const { onToggleMode } = useSettings() 
  const [selectedNavLink, setSelectedNavLink] = useState(0)
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
              <IconButton>
                {<Avatar src={faker.image.avatar()} />}
              </IconButton>
            </Stack>
          </Stack>
        </Box>
    </>
  )
}

export default Sidebar