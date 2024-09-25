import styled from "@emotion/styled";
import { forwardRef, HTMLAttributes } from "react";

import {
  AlignItemsType,
  AlignSelfType,
  FlexDirectionType,
  JustifyContentType,
  JustifySelfType,
} from "@/types";

export interface FlexBaseProps {
  auto?: boolean;
  gap?: string;
  alignItems?: AlignItemsType;
  alignSelf?: AlignSelfType;
  flexDirection?: FlexDirectionType;
  justifyContent?: JustifyContentType;
  justifySelf?: JustifySelfType;
}

export const FlexBase = styled.div<FlexBaseProps>(
  ({
    auto,
    flexDirection = "row",
    gap,
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
  }) => ({
    display: "flex",
    flex: auto ? "auto" : undefined,
    flexDirection,
    gap,
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
  })
);

type FlexProps = FlexBaseProps & HTMLAttributes<HTMLDivElement>;
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...rest }, ref) => (
    <FlexBase ref={ref} {...rest}>
      {children}
    </FlexBase>
  )
);

Flex.displayName = "Flex";
