import React from "react";
import { Box, Button, Center, Heading, Image, VStack, Text, HStack, theme } from "native-base";
import notebook from "../../assets/images/notebook.png";
import Icon  from "react-native-vector-icons/Ionicons";


export function Atividade({ name, description, arquivo }) {
  return (
    <React.Fragment>
      <VStack bg={"white"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"gray.300"} w={"100%"}>
        <Center padding={5} background={"green.200"}>
          <Image size={"100px"} source={notebook} alt="Imagem de um caderno sorrindo" />
        </Center>
        <VStack padding={3}>
          <Heading fontSize={22}>{name}</Heading>
          <HStack mt={"26px"}>
            <Text fontSize={17}>{description}</Text>
            <HStack ml={"auto"} alignItems={"center"}>
              <Icon name="star" size={20} color={"orange"} />
              <Text ml={1} fontSize={17}>1000</Text>
            </HStack>
          </HStack>
        </VStack>
        <Button size={"lg"} borderRadius={0} colorScheme={"green"}>Ver redação</Button>
      </VStack>
    </React.Fragment>
  );
}