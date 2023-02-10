import { useState } from "react";
import FormProvider from "../hook-form/FormProvider";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, IconButton, Link, Stack } from "@mui/material";
import RhfTextField from "../hook-form/RhfTextField";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
// import { LoadingButton } from "@mui/lab";

const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);

  //   yup schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("email is a required field")
      .email("enter a valid email"),
    password: Yup.string()
      .min(8)
      .max(15)
      .required("password is a required field"),
  });

  // #region : useForm

  const defaultValues = {
    email: "demo@chatapp.com",
    password: "Demo@12345",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
    handleSubmit,
  } = methods;

  // #endregion

  // handling functions
  const onSubmit = async () => {
    try {
      // send data to server
    } catch (err) {
      console.log(err.message);
      reset();
      setError("afterSubmit", {
        ...err,
        message: err.message,
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {/* error */}
        <Stack spacing={2} sx={{ width: "100%" }}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
        </Stack>

        {/* input fields */}
        <Stack width={"100%"} spacing={3}>
          <RhfTextField name={"email"} label="Email" />
          {/* <p>{errors.email?.message}</p> */}
          <RhfTextField
            name={"password"}
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (() =>
                showPassword ? (
                  <IconButton onClick={() => setShowPassword(false)}>
                    <Eye />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setShowPassword(true)}>
                    <EyeSlash />
                  </IconButton>
                ))(),
            }}
          />
          {/* <p>{errors.email?.message}</p> */}
        </Stack>

        {/* forget password */}
        <Stack alignItems="flex-end" sx={{ my: 2 }}>
          <Link
            component={RouterLink}
            to="/auth/reset-password"
            variant="body2"
            color="inherit"
            underline="always"
          >
            Forgot password?
          </Link>
        </Stack>

        {/* loading button */}
        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={true}
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Login
        </Button>
      </FormProvider>
    </Box>
  );
};

export default Loginform;
