import { Box, Center, HStack, Heading, ScrollView, Text } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Material } from "../../components/material";


export const AreaAlunoRoute = 'Área do aluno';

const materiais = [
  {
    name: "O que faz zerar uma redação+?",
    arquivo: "google.com"
  },
  {
    name: "O que faz zerar uma redação?",
    arquivo: "google.com"
  },
  {
    name: "O que faz zerar uma redação",
    arquivo: "google.com"
  },
]

export function AreaAluno() {
  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3}>
        <HStack alignItems={"center"} mb={2}>
          <Center mr={2} bg={"green.400"} p={"6px"} borderRadius={100}>
            <Icon name="book-outline" size={26} />
          </Center>
          <Heading>Matrizes</Heading>
        </HStack>
        {materiais.map(material => (
          <Material
            key={material.name}
            name={material.name}
            arquivo={material.arquivo}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
}