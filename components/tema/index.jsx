import React from "react";
import { Box, HStack, Text } from "native-base";


export function Tema({ tema }) {
  return (
    <React.Fragment>
      <Box p={"1px"}>
        <HStack p={2} px={3} bg={"green.600"} borderRadius={8} borderWidth={1} borderColor={"gray.200"}>
          <Text color={"white"} fontSize={18} bold fontWeight={"600"}>{tema}</Text>
        </HStack>
      </Box>
    </React.Fragment>
  );
}