"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
  number: string;
};

export default function FaqAccordion(props: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="accordion pt-5 pb-5 first:pt-0 last:pb-0">
      <div className="accordion-heading flex items-center">
        <p className="mr-10 text-[24px] font-medium">{props.number}</p>
        <p className="mr-auto text-[24px] font-medium">{props.question}</p>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={expanded ? faMinus : faPlus}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      <div
        className={`accordion-panel ease-in-out flex items-center transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-80" : "max-h-0"
        }`}
      >
        <p className="mr-10 text-white text-[24px] font-medium">
          {props.number}
        </p>
        <p className="text-[18px] my-5">{props.answer}</p>
      </div>
    </div>
  );
}
