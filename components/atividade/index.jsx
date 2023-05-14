import React from "react";
import { Box, Button, Center, Heading, Image, VStack, Text, HStack } from "native-base";
import notebook from "../../assets/images/notebook.png";
import Icon from "react-native-vector-icons/Ionicons";


export function Atividade({ name, arquivo }) {
  return (
    <React.Fragment>
      <Box py={"1px"}>
        <HStack px={3} py={2} alignItems={"center"} bg={"white"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"gray.300"} w={"100%"}>
          <Text bold fontSize={20}>{name}</Text>
          <Button ml={"auto"} px={5} size={"lg"} borderRadius={30} colorScheme={"green"}>
            Praticar
          </Button>
        </HStack>
      </Box>
    </React.Fragment>
  );
}