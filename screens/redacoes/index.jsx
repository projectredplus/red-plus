import React, { useState } from "react";
import { Box, Center,ScrollView, Flex, Select } from "native-base";
import { styles } from "./styles";
import { Essay } from "../../components/essay";
import { essays, years } from "../../assets/data/essays";


export const RedacoesRoute = "Redações nota 1000";

export function Redacoes() {
  const [selectedYear, setSelectedYear] = useState(String(years[0]));
  const filteredEssays = essays.filter((essay) => essay.year === String(selectedYear));
  console.log(filteredEssays.length)
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
            {years.map(year => (
              <Select.Item key={year} label={String(year)} value={String(year)} />
            ))}
          </Select>
        </Box>
      </Center>
      <ScrollView mb={3} padding={3} flex={1}>
        <Flex direction="row" wrap="wrap">
          {filteredEssays.map((essay) => (
            <Essay key={essay.autor} autor={essay.autor} arquivo={essay.file} />
          ))}
        </Flex>
      </ScrollView>
    </React.Fragment>
  );
}