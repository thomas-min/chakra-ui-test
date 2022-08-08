import { Box, Checkbox, Flex, Heading } from "@chakra-ui/react";

export default function CheckBoxes() {
  return (
    <Box>
      <Heading as="h2" size="xl" my="4">
        Check Box
      </Heading>
      <Flex>
        <Checkbox colorScheme="primary" size="sm">
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" size="sm" isChecked>
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" size="sm" isIndeterminate>
          디폴트
        </Checkbox>
      </Flex>
      <Flex>
        <Checkbox colorScheme="primary" size="sm" isDisabled>
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" size="sm" isChecked isDisabled>
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" size="sm" isIndeterminate isDisabled>
          디폴트
        </Checkbox>
      </Flex>
      <Flex>
        <Checkbox colorScheme="primary">디폴트</Checkbox>
        <Checkbox colorScheme="primary" isChecked>
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" isIndeterminate>
          디폴트
        </Checkbox>
      </Flex>
      <Flex>
        <Checkbox colorScheme="primary" isDisabled>
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" isChecked isDisabled>
          디폴트
        </Checkbox>
        <Checkbox colorScheme="primary" isIndeterminate isDisabled>
          디폴트
        </Checkbox>
      </Flex>
    </Box>
  );
}
