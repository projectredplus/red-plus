import React from "react";
import { Box, Text, Button, View, Center, Card, VStack, Heading, ScrollView } from "native-base";
import { styles } from "./styles";
import { Essay } from "../../components/essay";

export const RedacoesRoute = "Redações nota 1000";

const essays = [
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Renan Alves",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  }
]

export function Redacoes() {
  return (
    <React.Fragment>
      <ScrollView mb={3} flex={1} padding={4} {...styles.container}>
        {essays.map(essay => (
          <Essay
            key={essay.file}
            tema={essay.tema}
            autor={essay.autor}
            arquivo={essay.file}
          />
        ))}
      </ScrollView>
    </React.Fragment>

  );
}