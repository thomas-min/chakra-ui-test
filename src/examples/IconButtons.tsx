import { CheckIcon } from "../components/icons/CheckIcon";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";

export default function IconButtons() {
  return (
    <Box>
      <Heading as="h2" size="xl">
        Icon Button
      </Heading>
      <Flex gap={1} align="center">
        <IconButton
          aria-label="check icon"
          size="iconMd"
          variant="ghost"
          icon={<CheckIcon boxSize={6} />}
        />
        <IconButton
          aria-label="check icon"
          size="iconMd"
          variant="ghost"
          isDisabled
          icon={<CheckIcon boxSize={6} />}
        />
        <IconButton
          aria-label="check icon"
          size="iconSm"
          variant="ghost"
          icon={<CheckIcon boxSize={4} />}
        />
        <IconButton
          aria-label="check icon"
          size="iconSm"
          variant="ghost"
          isDisabled
          icon={<CheckIcon boxSize={4} />}
        />
      </Flex>
    </Box>
  );
}
