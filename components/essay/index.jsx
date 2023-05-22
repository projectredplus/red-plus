import React from "react";
import { Button, Center, Image, VStack, Text, Box } from "native-base";
import notebook from "../../assets/images/notebook.png";
import * as Linking from "expo-linking";
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

export function Essay({ autor, arquivo }) {
  const getPdf = async (uri) => {
    try {
      await FileSystem.getContentUriAsync(uri).then(cUri => {
        console.log(cUri);
        IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: cUri,
          flags: 1,
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <React.Fragment>
      <Box w={"50%"} p={1}>
        <VStack bg={"white"} borderWidth={1} overflow={"hidden"} borderRadius={8} borderColor={"gray.300"}>
          <Center padding={5} py={8} pb={6} background={"green.200"}>
            <Image size={"100px"} source={notebook} alt="Imagem de um caderno sorrindo" />
          </Center>
          <VStack alignItems={"center"} bg="green.200">
            <Text fontSize={18}>Redação de</Text>
            <Text textAlign={"center"} fontSize={20} pb={2} bold>{autor}</Text>
          </VStack>
          <Button onPress={() => getPdf(arquivo)} size={"lg"} borderRadius={0} colorScheme={"green"}>
            Ver redação
          </Button>
        </VStack>
      </Box>
    </React.Fragment>
  );
}