import React from "react";
import { Box, Text } from "native-base";
import { styles } from "./styles";

export const AtividadesRoute = "Atividades";

export function Atividades() {
  return (
    <Box {...styles.container}>
      <Text>Atividades</Text>
    </Box>
  );
}