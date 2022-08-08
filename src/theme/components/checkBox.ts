import { ComponentStyleConfig } from "@chakra-ui/react";

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      borderRadius: "md",
      h: 4,
      w: 4,
      bg: "gray.100",
      borderColor: "gray.250",
      borderWidth: "1px",
      _disabled: {
        bg: "gray.100",
        borderColor: "gray.150",
        _checked: {
          color: "white",
          bg: "gray.400",
          borderColor: "gray.400",
        },
        _indeterminate: {
          color: "white",
          bg: "gray.400",
          borderColor: "gray.400",
        },
      },
    },
    container: {
      p: 1,
      borderRadius: "md",
      _hover: {
        bg: "gray.150",
        _disabled: {
          bg: "none",
        },
      },
    },
  },
  sizes: {
    sm: {
      control: {
        h: 4,
        w: 4,
      },
      label: {
        fontSize: "md",
      },
    },
    md: {
      control: {
        h: 6,
        w: 6,
      },
      label: {
        fontSize: "md",
      },
    },
  },
};

export default Checkbox;
