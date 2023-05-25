import { Box, Center, HStack, Heading, ScrollView, Text, Image, Button } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Material } from "../../components/material";
import { Video } from "../../components/Video";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { matrizes } from "../../assets/data/matrizes";
import { videos } from "../../assets/data/videos";

export const AreaAlunoRoute = 'Área do aluno';

export function AreaAluno() {
  const [hasUser, setHasUser] = React.useState(null);

  const getUser = async () => {
    const existingUser = await AsyncStorage.getItem('@user');
    existingUser ? setHasUser(existingUser) : setHasUser(null);
  }

  const deleteUser = async () => {
    await AsyncStorage.removeItem('@user');
    setHasUser(null);
  }


  React.useEffect(() => {
    getUser();
  }, [])

  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3}>
        <Center my={2}>
          <Center mb={1} borderWidth={1} borderColor={"green.400"} width={"90px"} height={"90px"} borderRadius={100} bg={"green.200"}>
            <Icon size={50} name="account-outline" color={"green"} />
          </Center>
          {hasUser 
          ? (
            <HStack alignItems={"center"} flexWrap={"wrap"}>
              <Heading mr={3}>{hasUser}</Heading>
              <Button p={2} colorScheme={"red"} onPress={() => deleteUser()}>
                <Icon size={18} color={"white"} name="logout" />
              </Button>
            </HStack>
          )
          : <Heading>?</Heading>}

        </Center>
        <HStack alignItems={"center"} mb={2}>
          <Center mr={2} bg={"green.400"} p={"6px"} borderRadius={100}>
            <Icon name="book-outline" size={26} />
          </Center>
          <Heading>Matrizes</Heading>
        </HStack>
        <Box mb={5}>
          {matrizes.map(material => (
            <Material
              key={material.name}
              name={material.name}
              arquivo={material.arquivo}
            />
          ))}
        </Box>
        <HStack alignItems={"center"} mb={2}>
          <Center mr={2} bg={"green.400"} p={"6px"} borderRadius={100}>
            <Icon name="youtube" size={26} />
          </Center>
          <Heading>Video-aulas</Heading>
        </HStack>
        <Box>
          {videos.map(video => (
            <Video key={video} videoId={video} />
          ))}
        </Box>
      </ScrollView>
    </React.Fragment>
  );
}