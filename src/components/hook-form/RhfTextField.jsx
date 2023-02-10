import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

// type checking
RhfTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RhfTextField({ name, helperText, ...others }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...others}
          fullWidth
          //   just setting the value empty if the numerical value is 0
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error.message : helperText}
        />
      )}
    />
  );
}
