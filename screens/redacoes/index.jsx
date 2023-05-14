import React from "react";
import { Box, Text, Button, View, Center, Card, VStack, Heading, ScrollView, HStack, Flex } from "native-base";
import { styles } from "./styles";
import { Essay } from "../../components/essay";

export const RedacoesRoute = "Redações nota 1000";

const essays = [
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elitf. Eveniet, beatae?",
    autor: "Renan Alves",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elitd. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elist. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing eldit. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elwit. Eveniet, beatae?",
    autor: "Lorem ipsum",
    file: "google.com"
  }
]

export function Redacoes() {
  return (
    <React.Fragment>
      <ScrollView padding={3} flex={1}>
        <Flex wrap="wrap" direction="row">
          {essays.map(essay => (
            <Essay
              key={essay.tema}
              tema={essay.tema}
              autor={essay.autor}
              arquivo={essay.file}
            />
          ))}
        </Flex>
      </ScrollView>
    </React.Fragment>

  );
}