import React from "react";
import { Box, Text } from "native-base";
import { styles } from "./styles";
import { Essay } from "../../components/essay";

export const RedacoesRoute = "Redações nota 1000";

export function Redacoes() {
  return (
    <React.Fragment>
      <Box padding={4} {...styles.container}>
        <Essay
          tema={"Desafios para a formação educacional de surdos no Brasil"}
          autor={"Renan Alves"}
        />
      </Box>
    </React.Fragment>
  );
}