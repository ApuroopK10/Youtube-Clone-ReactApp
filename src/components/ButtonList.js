import React from "react";
import Button from "./Button";
import { BUTTON_LIST } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {BUTTON_LIST?.map((btn, btnIdx) => (
        <Button key={btnIdx} name={btn}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
