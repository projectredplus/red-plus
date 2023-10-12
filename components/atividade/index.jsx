import React from "react";
import { Box, Link, Text, HStack } from "native-base";
import notebook from "../../assets/images/notebook.png";
import Icon from "react-native-vector-icons/Ionicons";


export function Atividade({ name, arquivo }) {
  return (
    <React.Fragment>
      <Box py={"3px"}>
        <HStack px={3} py={2} pr={0} alignItems={"center"} bg={"blueGray.500"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"blueGray.300"} w={"100%"}>
          <Text w={"70%"} bold fontSize={18}>{name}</Text>
          <Link href={arquivo} py={3} px={5} bg={"green.500"} borderRadius={30}>
            <Text color={"white"} fontSize={15} bold>Praticar</Text>
          </Link>
        </HStack>
      </Box>
    </React.Fragment>
  );
}