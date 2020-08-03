import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Sizes = () => (
  <>
    <Button onClick={action("clicked")}>medium</Button>
    <Button onClick={action("clicked")} size="small">
      small
    </Button>
  </>
);

export const Colors = () => (
  <>
    <Button onClick={action("clicked")} color="blue">
      blue
    </Button>
    <Button onClick={action("clicked")} color="lightBlue">
      lightBlue
    </Button>
    <Button onClick={action("clicked")} color="lightOrange">
      ligthOrange
    </Button>
    <Button onClick={action("clicked")} color="lightRed">
      lightRed
    </Button>
  </>
);


export const Disabled = () => (
  <Button onClick={action("clicked")} disabled>
    disabled
  </Button>
);
