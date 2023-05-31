import React from "react";
import { Box, Center, ScrollView, Image, Flex, Select, Text, Heading, Link } from "native-base";
import robo from "../../assets/images/robo-2.png";


export const DesafioRoute = "Desafios mensais";

export function Desafio() {
  return (
    <React.Fragment>
      <ScrollView flex={1}>
      <Center padding={4} py={2} pb={0}>
        <Image size={250} source={robo} alt="Robo" />
        <Heading mb={2}>ATENÇÃO!</Heading>
        <Text textAlign={"justify"} mb={3} fontSize={15}>
          Os desafios mensais são uma oportunidade única de aprimorar suas habilidades
          quando você já
          dominou os fundamentos básicos e deseja desafios que estimulem e testem seu cérebro.
          Esses desafios proporcionam um ambiente estimulante no qual você pode aplicar o conhecimento adquirido,
          desenvolver sua criatividade e encontrar soluções inovadoras para problemas complexos.
        </Text>
        <Heading mb={2}>Tema do mês:</Heading>
        <Heading mb={3} color={"gray.600"}>Educação científica e as relações étnico-raciais</Heading>
        <Link href="" mb={1} justifyContent={"center"} w={"100%"} bg={"green.500"} p={3} px={6} borderRadius={6}>
          <Text color={"white"}>Estudos Adicionais</Text>
        </Link>
        <Link mb={1} justifyContent={"center"} w={"100%"} bg={"green.500"} p={3} px={6} borderRadius={6}>
          <Text color={"white"}>Praticar jogos</Text>
        </Link>
        <Link mb={1} justifyContent={"center"} w={"100%"} bg={"green.500"} p={3} px={6} borderRadius={6}>
          <Text color={"white"}>Praticar exercício</Text>
        </Link>
        <Link justifyContent={"center"} w={"100%"} bg={"green.500"} p={3} px={6} borderRadius={6}>
          <Text color={"white"}>Escrever redação</Text>
        </Link>
      </Center>
      </ScrollView>
    </React.Fragment>
  );
}