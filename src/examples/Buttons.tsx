import { CheckIcon } from "../components/icons/CheckIcon";
import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";

export default function Buttons() {
  return (
    <Box>
      <Heading as="h2" size="xl" my="4">
        Button
      </Heading>
      <Flex gap="12">
        <section>
          <Heading as="h3" size="md">
            Outline
          </Heading>
          <Box my="4">
            <Flex align="center" gap="2">
              <Button variant="outline">버튼</Button>
              <Button variant="outline" size="sm">
                버튼
              </Button>
            </Flex>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button variant="outline" leftIcon={<CheckIcon boxSize={6} />}>
                버튼
              </Button>
              <Button variant="outline" rightIcon={<CheckIcon boxSize={6} />}>
                버튼
              </Button>
            </ButtonGroup>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button isDisabled variant="outline">
                버튼
              </Button>
            </ButtonGroup>
          </Box>
        </section>
        <section>
          <Heading as="h3" size="md">
            Primary
          </Heading>
          <Box my="4">
            <Flex align="center" gap="2">
              <Button colorScheme="primary">버튼</Button>
              <Button colorScheme="primary" size="sm">
                버튼
              </Button>
            </Flex>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button
                colorScheme="primary"
                leftIcon={<CheckIcon boxSize={6} />}
              >
                버튼
              </Button>
              <Button
                colorScheme="primary"
                rightIcon={<CheckIcon boxSize={6} />}
              >
                버튼
              </Button>
            </ButtonGroup>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button colorScheme="primary" isDisabled>
                버튼
              </Button>
            </ButtonGroup>
          </Box>
        </section>
        <section>
          <Heading as="h3" size="md">
            Ghost
          </Heading>
          <Box my="4">
            <Flex align="center" gap="2">
              <Button variant="ghost">버튼</Button>
              <Button variant="ghost" size="sm">
                버튼
              </Button>
            </Flex>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button variant="ghost" leftIcon={<CheckIcon boxSize={6} />}>
                버튼
              </Button>
              <Button variant="ghost" rightIcon={<CheckIcon boxSize={6} />}>
                버튼
              </Button>
            </ButtonGroup>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button isDisabled variant="ghost">
                버튼
              </Button>
            </ButtonGroup>
          </Box>
        </section>
        <section>
          <Heading as="h3" size="md">
            Link
          </Heading>
          <Box my="4">
            <Flex align="center" gap="2">
              <Button variant="link">버튼</Button>
              <Button variant="link" size="sm">
                버튼
              </Button>
            </Flex>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button variant="link" leftIcon={<CheckIcon boxSize={6} />}>
                버튼
              </Button>
              <Button variant="link" rightIcon={<CheckIcon boxSize={6} />}>
                버튼
              </Button>
            </ButtonGroup>
          </Box>
          <Box my="4">
            <ButtonGroup>
              <Button isDisabled variant="link">
                버튼
              </Button>
            </ButtonGroup>
          </Box>
        </section>
      </Flex>
    </Box>
  );
}
