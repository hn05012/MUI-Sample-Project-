import React, { FC, ReactElement } from "react";
import { Button, useTheme } from "@mui/material";
import theme from "./index";

const CustomButton: FC = (): ReactElement => {
  const theme = useTheme();
  return (
    <section>
      <Button sx={{ color: "primary.main" }}>Hello World</Button>
      {/* <Button sx={{ color: "primary.light" }}>Hello World</Button>
      <Button sx={{ color: "primary.dark" }}>Hello World</Button>
      <Button sx={{ color: "secondary.main" }}>Hello World</Button>
      <Button sx={{ color: "secondary.light" }}>Hello World</Button>
      <Button sx={{ color: "secondary.dark" }}>Hello World</Button>
      <Button sx={{ color: "error.main" }}>Hello World</Button>
      <Button sx={{ color: "error.light" }}>Hello World</Button>
      <Button sx={{ color: "error.dark" }}>Hello World</Button>
      <Button sx={{ color: "info.main" }}>Hello World</Button>
      <Button sx={{ color: "info.light" }}>Hello World</Button>
      <Button sx={{ color: "info.dark" }}>Hello World</Button> */}
    </section>
  );
};

export default CustomButton;
