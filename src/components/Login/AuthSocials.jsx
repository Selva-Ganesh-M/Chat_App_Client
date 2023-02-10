import { IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocials = () => {
  const handleGoogleLogin = () => {};
  const handleGithubLogin = () => {};
  const handleTwitterLogin = () => {};

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <IconButton onClick={handleGoogleLogin}>
        <GoogleLogo color="#DF3E30" />
      </IconButton>

      <IconButton color="inherit" onClick={handleGithubLogin}>
        <GithubLogo />
      </IconButton>

      <IconButton onClick={handleTwitterLogin}>
        <TwitterLogo color="#1C9CEA" />
      </IconButton>
    </Stack>
  );
};

export default AuthSocials;
