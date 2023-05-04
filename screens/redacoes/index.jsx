import React from "react";
import { Box, Text } from "native-base";
import { styles } from "./styles";

export const RedacoesRoute = "Redações nota 1000";

export function Redacoes() {
  return (
    <Box {...styles.container}>
      <Text>Redações</Text>
    </Box>
  );
}