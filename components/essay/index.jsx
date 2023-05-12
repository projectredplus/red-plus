import React from "react";
import { Box, Button, Center, Heading, Image, VStack, Text } from "native-base";
import notebook from "../../assets/images/notebook.png";


export function Essay() {
  return (
    <React.Fragment>
      <VStack  bg={"white"} borderWidth={1} w={"100%"} h={200}>
        <Center width={"100%"} height={120}>
          <Image source={notebook} alt="Imagem de um caderno sorrindo" />
        </Center>
        <Heading>ASDF</Heading>
        <Text>Autor</Text>
        <Button colorScheme={"green.400"}>Ver redação</Button>
      </VStack>
    </React.Fragment>
  );
}