import {
  Box,
  Center,
  HStack,
  Heading,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Input,
} from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Material } from "../../components/material";
import { Video } from "../../components/Video";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { matrizes } from "../../assets/data/matrizes";
import { videos } from "../../assets/data/videos";
import * as ImagePicker from "expo-image-picker";

export const AreaAlunoRoute = "Área do aluno";

export function AreaAluno({ navigation }) {
  const [hasUser, setHasUser] = React.useState(null);
  const [hasPicture, setHasPicture] = React.useState(null);

  const getUser = async () => {
    const existingUser = await AsyncStorage.getItem("@user");
    const existingPicture = await AsyncStorage.getItem("@picture");

    setHasUser(existingUser || null);
    setHasPicture(existingPicture || null);
  };

  const pickPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      await AsyncStorage.setItem("@picture", result.assets[0].uri);
      setHasPicture(result.assets[0].uri);
    }
  };

  const deleteUser = async () => {
    await AsyncStorage.removeItem("@user");
    setHasUser(null);
    setHasPicture(null);
  };

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      getUser();
    });
    getUser();
  }, [navigation]);

  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3} backgroundColor={"blueGray.700"}>
        <Center my={2}>
          <Center
            overflow={"hidden"}
            mb={1}
            borderWidth={1}
            borderColor={"primary.300"}
            width={"90px"}
            height={"90px"}
            borderRadius={100}
            bg={"green.200"}
          >
            {hasPicture != null ? (
              <Button
                bg={"white"}
                overflow={"hidden"}
                p={0}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => pickPicture()}
              >
                {hasPicture && (
                  <Image
                    h={"100%"}
                    w={"100%"}
                    alt="Profile"
                    source={{ uri: hasPicture }}
                    style={{ width: 100, height: 100 }}
                  />
                )}
              </Button>
            ) : (
                <Icon
                onPress={() => {pickPicture()}}
                size={50}
                name="plus"
                color={"green"}
              />)
            }
          </Center>
          {hasUser ? (
            <HStack alignItems={"center"} flexWrap={"wrap"}>
              <Heading mr={3}>{hasUser}</Heading>
              <Button p={2} colorScheme={"red"} onPress={() => deleteUser()}>
                <Icon size={18} color={"white"} name="logout" />
              </Button>
            </HStack>
          ) : (
            <Heading>?</Heading>
          )}
        </Center>
        <HStack alignItems={"center"} mb={2}>
          <Center mr={2} bg={"primary.300"} p={"6px"} borderRadius={100}>
            <Icon name="book-outline" size={26} />
          </Center>
          <Heading>Matrizes</Heading>
        </HStack>
        <Box mb={5}>
          {matrizes.map((material) => (
            <Material
              key={material.name}
              name={material.name}
              arquivo={material.arquivo}
            />
          ))}
        </Box>
        <HStack alignItems={"center"} mb={2}>
          <Center mr={2} bg={"primary.300"} p={"6px"} borderRadius={100}>
            <Icon name="youtube" size={26} />
          </Center>
          <Heading>Video-aulas</Heading>
        </HStack>
        <Box>
          {videos.map((video) => (
            <Video key={video} videoId={video} />
          ))}
        </Box>
      </ScrollView>
    </React.Fragment>
  );
}
