import React, { FC } from "react";

interface BlueBoxProps {
  text: string;
}

const BlueBox: FC<BlueBoxProps> = ({ text }) => {
  return (
    <span className="bg-slate-100 text-slate-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
      {text}
    </span>
  );
};

export default BlueBox;
