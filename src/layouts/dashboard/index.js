
import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

// custom
import Sidebar from "./Sidebar.jsx";


// React FC
const DashboardLayout = () => {
  //#region : declarations

  //#endregion

  //#region : hooks

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
