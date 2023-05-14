import React from "react";
import { Box, Button, Center, Heading, Image, VStack, Text, HStack, theme, View } from "native-base";
import notebook from "../../assets/images/notebook.png";
import Icon from "react-native-vector-icons/Ionicons";


export function Essay({ autor, arquivo }) {
  return (
    <React.Fragment>
      <VStack bg={"white"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"gray.300"} w={"50%"}>
        <Center padding={5} py={8} pb={6} background={"green.200"}>
          <Image size={"100px"} source={notebook} alt="Imagem de um caderno sorrindo" />
        </Center>
        <VStack alignItems={"center"} bg="green.200">
          <Text fontSize={18}>Redação de</Text>
          <Text fontSize={20} bold>{autor}</Text>
        </VStack>
        <Button size={"lg"} borderRadius={0} colorScheme={"green"}>Ver redação</Button>
      </VStack>
    </React.Fragment>
  );
}