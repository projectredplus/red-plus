import React from "react";
import { Box, Text } from "native-base";
import { styles } from "./styles";

export const HomeRoute = "Home";

export function Home() {
  return (
    <Box {...styles.container}>
      <Text>Início</Text>
    </Box>
  );
}