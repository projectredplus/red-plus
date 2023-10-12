import React from "react";
import {
  Box,
  Center,
  ScrollView,
  Image,
  Flex,
  Select,
  Text,
  Heading,
  Link,
  Button,
  theme,
} from "native-base";
import { Link as NavLink } from "@react-navigation/native";
import robo from "../../assets/images/robo-2.png";

export const DesafioRoute = "Desafios mensais";

export function Desafio() {
  return (
    <React.Fragment>
      <ScrollView flex={1} backgroundColor={"blueGray.700"}>
        <Center padding={4} py={2} pb={0}>
          <Image size={300} source={robo} alt="Robo" />

          <Box
            backgroundColor={"blueGray.500"}
            p={4}
            borderRadius={8}
            borderWidth={1}
            borderColor={"blueGray.200"}
            mb={3}
          >
            <Heading textAlign={"center"} mb={3}>
              ATENÇÃO!
            </Heading>
            <Text textAlign={"center"} mb={3} fontSize={17}>
              Os desafios mensais são uma oportunidade única de aprimorar suas
              habilidades quando você já dominou os fundamentos básicos e deseja
              desafios que estimulem e testem seu cérebro. Esses desafios
              proporcionam um ambiente estimulante no qual você pode aplicar o
              conhecimento adquirido, desenvolver sua criatividade e encontrar
              soluções inovadoras para problemas complexos.
            </Text>
          </Box>
          <Box
            backgroundColor={"blueGray.500"}
            p={4}
            w={"100%"}
            borderRadius={8}
            borderWidth={1}
            borderColor={"blueGray.200"}
            mb={3}
          >
            <Heading textAlign={"center"} mb={3}>
              Tema do mês:
            </Heading>
            <Text fontSize={25} textAlign={"center"} mb={3} color={"blueGray.50"}>
              Educação científica e as relações étnico-raciais
            </Text>
          </Box>
          <Link
            href=""
            mb={1}
            justifyContent={"center"}
            w={"100%"}
            bg={"green.500"}
            p={3}
            px={6}
            borderRadius={6}
          >
            <Text color={"white"}>Estudos Adicionais</Text>
          </Link>
          <Link
            mb={1}
            justifyContent={"center"}
            w={"100%"}
            bg={"green.500"}
            p={3}
            px={6}
            borderRadius={6}
          >
            <Text color={"white"}>Praticar jogos</Text>
          </Link>
          <Link
            mb={1}
            justifyContent={"center"}
            w={"100%"}
            bg={"green.500"}
            p={3}
            px={6}
            borderRadius={6}
          >
            <Text color={"white"}>Praticar exercício</Text>
          </Link>
          <NavLink
          style={{
            backgroundColor: theme.colors.green[500],
            width: "100%",
            textAlign: "center",
            padding: 12,
            borderRadius: 8
          }}
          to={{ screen: "Escrever" }}>
            <Text color={"white"}>Escrever redação</Text>
          </NavLink>
        </Center>
      </ScrollView>
    </React.Fragment>
  );
}
