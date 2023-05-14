import React from "react";
import { Box, ScrollView, Text } from "native-base";
import { styles } from "./styles";
import { Tema } from "../../components/tema";

export const TemasRoute = "Possíveis temas";

const temas = [
  {
    tema: "A falibilidade do sistema carcerário em questão no Brasil.",
  },
  {
    tema: "A falibilidade do sistema carcerário em questão no Brasil?",
  },
  {
    tema: "A falibilidade do sistema carcerário em questão no Brasil+",
  },
  {
    tema: "A falibilidade do sistema carcerário em questão no Brasil",
  },
]

export function Temas() {
  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3}>
        {temas.map(tema => (
          <Tema
            key={tema.tema}
            tema={tema.tema}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
}