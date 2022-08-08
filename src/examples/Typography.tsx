import { Box, Heading, Text } from "@chakra-ui/react";

export default function Typography() {
  return (
    <Box>
      <Heading>Typography</Heading>
      <Text textStyle="h1">H1</Text>
      <Text textStyle="h2">H2</Text>
      <Text textStyle="h3">H3</Text>
      <Text textStyle="body1">body1</Text>
      <Text textStyle="body2">body2</Text>
      <Text textStyle="body3">body3</Text>
      <Text textStyle="body4">body4</Text>
      <Text textStyle="element">element</Text>
      <Text textStyle="caption">caption</Text>
    </Box>
  );
}
