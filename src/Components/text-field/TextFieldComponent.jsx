import React from 'react'
import {
  Avatar,
  Box,
  InputLabel,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

const TextStyleWrapper = styled(Box)(
  ({ theme, fieldhelpertext }) => `
    width:100%;
    & .MuiOutlinedInput-root {
      padding-left: 0.5rem;
      & .MuiInputBase-inputAdornedEnd  {
        color: ${
          fieldhelpertext
            ? theme.palette.error.main
            : theme.palette.common.black
        };
      }
    }    
    & .MuiFormHelperText-root.Mui-error {
      color: ${theme.palette.error.main};
    }  
    & .MuiAlert-message {
      font-size: 0.875rem;
    } 
    & .MuiAlert-icon {
      font-size: .875rem;
      color: #ff485a;
      margin-top: 3px;
    }
`
);

const TextFieldComponent = (props) => {
  const {
    children,
    fieldtitle,
    mandatory,
    helpericon,
    helpericoncontent,
    fieldhelpertext,
    value = "",
    inputProps,
    defaultValue = "",
  } = props;

  return (
    <TextStyleWrapper>
      <Stack>
        <InputLabel
          sx={{ mb: "0.2rem", color: "grey.700" }}
          required={mandatory}
        >
          {fieldtitle}
        </InputLabel>
        {helpericon && (
          <Tooltip title={helpericoncontent || "tooltip text"} placement="top">
            <Avatar
              sx={{
                width: "0.9rem",
                height: "0.9rem",
                cursor: "pointer",
                marginTop: "0.10rem",
                marginBottom: "0.10rem",
              }}
              src={helpericon}
              variant="rounded"
            />
          </Tooltip>
        )}
      </Stack>
      <TextField {...props}>{children}</TextField>
      <Stack mt={"0.1rem"}>
        {fieldhelpertext ? (
          <alert color="error" severity="error">
            {fieldhelpertext || ""}
          </alert>
        ) : (
          <Typography variant="body2" visibility={"hidden"} lineHeight={"1em"}>
            error
          </Typography>
        )}
        <alert icon={false} color="info">
          {inputProps?.maxLength > 10
            ? `${
                inputProps?.maxLength - value?.length || defaultValue?.length
              } Characters`
            : ""}
        </alert>
      </Stack>
    </TextStyleWrapper>
  );
};

export default TextFieldComponent;
