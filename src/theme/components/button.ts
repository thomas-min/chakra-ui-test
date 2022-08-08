import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "md",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 2.5,
      h: 8,
    },
    md: {
      fontSize: "md",
      px: 4,
      h: 12,
      minW: 12,
    },
    iconMd: {
      h: 8,
      w: 8,
    },
    iconSm: {
      h: 6,
      w: 6,
    },
  },
  variants: {
    link: {
      color: "gray.700",
      textDecoration: "underline",
      textUnderlinePosition: "under",
      textDecorationColor: "gray.300",
      _disabled: {
        color: "gray.500",
      },
      _hover: {
        color: "gray.900",
        textDecorationColor: "gray.600",
        _disabled: {
          color: "gray.500",
          textDecoration: "underline",
          textUnderlinePosition: "under",
          textDecorationColor: "gray.300",
        },
      },
    },
  },
};

export default Button;
