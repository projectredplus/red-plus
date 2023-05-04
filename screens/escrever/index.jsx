import React from "react";
import { Box, Text } from "native-base";
import { styles } from "./styles";

export const EscreverRoute = "Escrever";

export function Escrever() {
  return (
    <Box {...styles.container}>
      <Text>Escrever</Text>
    </Box>
  );
}