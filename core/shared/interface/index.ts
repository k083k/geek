import { StaticImageData } from "next/image";
import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  buttonType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: StaticImageData;
  isDisabled?: boolean;
}

export interface HistoryCardProps {
  title: string;
  icon: string;
  date: string;
  iconBg: string;
  story: string;
}

export interface FoundersCardProps {
  info: InfoProps;
  image: string;
}
export interface InfoProps {
  name: string;
  position: string;
  links: {
    icon: JSX.Element;
    url: string;
  }[];
  content: string;
}

export interface SliderImageProps {
  images: {
    url: string;
  }[];
}

export interface DisplayInfoProps {
  isOpen: boolean;
  closeModal: () => void;
  info: InfoProps | undefined;
}

export interface ModalWrapperProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  containerStyles?: string;
}

export interface TeamsCardProps {
  info: InfoProps;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export interface inputProps {
  placeholder?: string;
  width?: string;
  scheme?: string;
  type?: string;
  name?: string;
  required?: boolean
};
