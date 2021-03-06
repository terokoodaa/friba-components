import React from "react";
import { inlineInfo } from "./utils";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    inlineInfo(`
      description
      
      ~~~js
      <Button>slkdjslkdj</Button>
      ~~~
      `)(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX("with background 2", () => (
    <Button disabled={boolean("disabled", false)}>
      {text("text", "Hello world")}
    </Button>
  ));
