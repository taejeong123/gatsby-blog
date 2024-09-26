import { FunctionComponent, SVGAttributes } from "react";

import ArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import Moon from "@/assets/icons/icon-moon.svg";
import Sun from "@/assets/icons/icon-sun.svg";
import React from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  variant: IconVariant;
  size?:
    | "10px"
    | "14px"
    | "16px"
    | "18px"
    | "20px"
    | "22px"
    | "24px"
    | "26px"
    | "28px"
    | "30px"
    | "40px"
    | "50px"
    | "80px";
}

export const Icon = ({
  variant,
  size = "16px",
  width,
  height,
  ...rest
}: IconProps) => {
  const IconComponent = ICON_SVG[variant];

  return (
    <IconComponent width={width ?? size} height={height ?? size} {...rest} />
  );
};

export const ICON_LIST = ["ArrowLeft", "Sun", "Moon"] as const;

export type IconVariant = (typeof ICON_LIST)[number];
export const ICON_SVG: {
  [key in IconVariant]: FunctionComponent<SVGAttributes<SVGElement>>;
} = {
  ArrowLeft,
  Sun,
  Moon,
} as const;
