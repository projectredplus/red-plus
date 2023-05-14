import React from "react";
import { Button, Center, Image, VStack, Text, Box } from "native-base";
import notebook from "../../assets/images/notebook.png";

export function Essay({ autor, arquivo }) {
  return (
    <React.Fragment>
      <Box w={"50%"} p={1}>
        <VStack bg={"white"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"gray.300"}>
          <Center padding={5} py={8} pb={6} background={"green.200"}>
            <Image size={"100px"} source={notebook} alt="Imagem de um caderno sorrindo" />
          </Center>
          <VStack alignItems={"center"} bg="green.200">
            <Text fontSize={18}>Redação de</Text>
            <Text fontSize={20} pb={2} bold>{autor}</Text>
          </VStack>
          <Button size={"lg"} borderRadius={0} colorScheme={"green"}>Ver redação</Button>
        </VStack>
      </Box>
    </React.Fragment>
  );
}