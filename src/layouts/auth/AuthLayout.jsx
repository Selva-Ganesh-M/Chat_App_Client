import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";

const AuthLayout = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      {/* wrapper: { logo + outlet } */}
      <Stack spacing={5} sx={{ mb: 5 }}>
        {/* logo */}
        <Stack alignItems={"center"}>
          <img src={logo} alt="logo-img" height={120} width={120} />
        </Stack>
      </Stack>

      {/* Outlet: [login, register] */}
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
