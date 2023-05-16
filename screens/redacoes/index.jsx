import React, { useState } from "react";
import {Box, Text, Button, View, Center, Card, VStack, Heading, ScrollView, HStack, Flex, Select,
} from "native-base";
import { styles } from "./styles";
import { Essay } from "../../components/essay";

export const RedacoesRoute = "Redações nota 1000";

const essays = [
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Renan Alves",
    file: "google.com",
    year: "2019",
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Renan Alves",
    file: "google.com",
    year: "2020",
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Renan Alves",
    file: "google.com",
    year: "2021",
  },
  {
    tema: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, beatae?",
    autor: "Renan Alves",
    file: "google.com",
    year: "2022",
  },
];

export function Redacoes() {
  const [selectedYear, setSelectedYear] = useState("2019");

  const filteredEssays = essays.filter((essay) => essay.year === selectedYear);

  return (
    <React.Fragment>
      <Center>
        <Box maxW="300" mt={3}>
          <Select
            selectedValue={selectedYear}
            minWidth="200"
            accessibilityLabel="Choose Year"
            placeholder="Choose Year"
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            <Select.Item label="Selecione" value="" />
            <Select.Item label="2019" value="2019" />
            <Select.Item label="2020" value="2020" />
            <Select.Item label="2021" value="2021" />
            <Select.Item label="2022" value="2022" />
          </Select>
        </Box>
      </Center>
      <ScrollView mb={3} padding={3} flex={1}>
        <Flex wrap="wrap" direction="row">
          {filteredEssays.map((essay) => (
            <Flex key={essay.file} direction="column" flexBasis="90%">
              <Essay tema={essay.tema} autor={essay.autor} arquivo={essay.file} />
              <Essay tema={essay.tema} autor={essay.autor} arquivo={essay.file} />
            </Flex>
          ))}
        </Flex>
      </ScrollView>
    </React.Fragment>
  );
}