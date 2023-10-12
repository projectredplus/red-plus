import React from "react";
import { Link, Center, Image, VStack, Text, Box } from "native-base";
import notebook from "../../assets/images/notebook.png";


export function Essay({ autor, arquivo }) {
  return (
    <React.Fragment>
      <Box w={"50%"} p={1}>
        <VStack bg={"white"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"blueGray.300"}>
          <Center padding={5} py={8} pb={6} background={"blueGray.500"}>
            <Image size={"100px"} source={notebook} alt="Imagem de um caderno sorrindo" />
          </Center>
          <VStack alignItems={"center"} bg="blueGray.500">
            <Text fontSize={18}>Redação de</Text>
            <Text textAlign={"center"} fontSize={20} pb={2} bold>{autor}</Text>
          </VStack>
          <Link href={arquivo} justifyContent={"center"} py={3} px={5} bg={"primary.600"} borderBottomRadius={4}>
            <Text color={"white"} fontSize={17} bold>Ver redação</Text>
          </Link>
        </VStack>
      </Box>
    </React.Fragment>
  );
}