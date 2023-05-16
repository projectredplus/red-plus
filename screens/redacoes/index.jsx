import React, { useState } from "react";
import { Box, Text, Button, View, Center, Card, VStack, Heading, ScrollView, HStack, Flex, Select } from "native-base";
import { styles } from "./styles";
import { Essay } from "../../components/essay";
import { essays } from "../../assets/data/essays";

export const RedacoesRoute = "Redações nota 1000";

export function Redacoes() {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredEssays = essays.filter((essay) => essay.year === selectedYear);

  return (
    <React.Fragment>
      <Center padding={4} py={2} pb={0}>
        <Box w={"100%"} mt={3}>
          <Select
            fontSize={18}
            selectedValue={selectedYear}
            bg={"white"}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            <Select.Item label="2019" value="2019" />
            <Select.Item label="2020" value="2020" />
            <Select.Item label="2021" value="2021" />
            <Select.Item label="2022" value="2022" />
          </Select>
        </Box>
      </Center>
      <ScrollView mb={3} padding={3} flex={1}>
        <Flex direction="row" width={"100%"}>
          {filteredEssays.map((essay) => (
            <Essay key={essay.tema} tema={essay.tema} autor={essay.autor} arquivo={essay.file} />
          ))}
        </Flex>
      </ScrollView>
    </React.Fragment>
  );
}