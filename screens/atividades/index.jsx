import React from "react";
import { Box, ScrollView, Text } from "native-base";
import { styles } from "./styles";
import { Atividade } from "../../components/atividade";

export const AtividadesRoute = "Atividades";

const atividades = [
  {
    name: "Separação silábica.",
    arquivo: "google.com",
  },
  {
    name: "Acentuação gráfica.",
    arquivo: "google.com",
  },
  {
    name: "Dissertação",
    arquivo: "google.com",
  },
  {
    name: "Lorem ipsum dolor sit.",
    arquivo: "google.com",
  },
]

export function Atividades() {
  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3}>
        {atividades.map(atividade => (
          <Atividade
            name={atividade.name}
            arquivo={atividade.arquivo}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
}