import { Container, Flex, Stack } from "@chakra-ui/react";
import Buttons from "./examples/Buttons";
import CheckBoxes from "./examples/CheckBoxes";
import IconButtons from "./examples/IconButtons";
import Typography from "./examples/Typography";

function App() {
  return (
    <Container maxW="container.lg">
      <Flex gap="24">
        <Typography />
        <Stack>
          <IconButtons />
          <CheckBoxes />
        </Stack>
      </Flex>
      <Buttons />
    </Container>
  );
}

export default App;
