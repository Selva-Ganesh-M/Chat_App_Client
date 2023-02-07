
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, Switch, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useSettings from "../../hooks/useSettings.js"

// custom
import Sidebar from "./Sidebar.jsx";


// React FC
const DashboardLayout = () => {
  //#region : declarations

  //#endregion

  //#region : hooks
  const theme = useTheme()
  //#endregion

  //#region : custom-declarations
  //#endregion

  //#region : side-effects

  //#endregion

  //#region : functions

  //#endregion

  //jsx rendering

  return (
    <>
      <Stack direction={"row"}>

        {/* sidebar */}
        <Sidebar />

        {/* Outlet */}
        <Outlet />

      </Stack>
    </>
  );
};

export default DashboardLayout;
