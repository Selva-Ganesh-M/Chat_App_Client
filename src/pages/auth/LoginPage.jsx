import { Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocials from "../../components/Login/AuthSocials";
import Loginform from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <Stack spacing={2} alignItems={"center"}>
      {/* header */}
      <Stack sx={{ mb: 2 }} spacing={2}>
        <Typography variant={"article"} textAlign={"center"}>
          Login to Chat App
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Typography variant={"subtitle2"}>New User?</Typography>
          <Link
            to="/auth/register"
            component={RouterLink}
            variant={"subtitle2"}
          >
            Create an account.
          </Link>
        </Stack>
      </Stack>

      {/* Login Form */}
      <Loginform />

      {/* divider */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"center"}
        spacing={1}
      >
        <Divider width={"46%"} />
        <Typography variant={"caption"} color={"text.disabled"}>
          OR
        </Typography>
        <Divider width={"46%"} />
      </Stack>

      {/* auth socials */}
      <AuthSocials />
    </Stack>
  );
};

export default LoginPage;
