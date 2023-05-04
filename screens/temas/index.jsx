import React from "react";
import { Box, Text } from "native-base";
import { styles } from "./styles";

export const TemasRoute = "Possíveis temas";

export function Temas() {
  return (
    <Box {...styles.container}>
      <Text>Temas</Text>
    </Box>
  );
}