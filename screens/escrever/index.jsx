import React from "react";
import { Alert, Image, Button, Center, HStack, Modal, Text, View, Box } from "native-base";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Stopwatch } from "react-native-stopwatch-timer";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const EscreverRoute = "Escrever";

export function Escrever() {
  const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
  const [resetStopwatch, setResetStopwatch] = React.useState(false);
  const [time, setTime] = React.useState('')
  const [resetModal, setResetModal] = React.useState(false);
  const [cameraOpen, setCameraOpen] = React.useState(false);

  const minutes = +time.slice(-5, -3);
  const hours = +time.slice(-8, -6);
  const seconds = +time.slice(-2);

  console.log(hours, minutes)

  const [permission, setPermission] = React.useState(false);
  const [camera, setCamera] = React.useState(false);
  const [image, setImage] = React.useState(false);


  React.useEffect(() => {
    (async () => {
      try {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        console.log(cameraStatus);
        setPermission(true);

      } catch (e) {
        console.log(e);
        setPermission(false);
      }
    })();
  }, [])

  const takePicture = async () => {
    const options = {
      quality: 0.8,
      base64: true,
      skipProcessing: true,
    };
    if (camera) {
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    }
  }

  const savePicture = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Imagem salva');
      } catch (e) {
        console.log(e)
      }
    }
  }

  const [flash, setFlash] = React.useState(false);
  
  return (
    <React.Fragment>

      <View flex={1} display={cameraOpen ? "none" : "flex"}>
        {seconds && isStopwatchStart == false
          ? ((hours < 1)
            ? (
              <Alert colorScheme={"green"}>
                Parabéns! você escreveu em tempo excelente!
              </Alert>
            )
            :
            (hours == 1 && minutes <= 30)
              ? (
                <Alert colorScheme={"amber"}>
                  Muito bem! você escreveu em tempo aceitável!
                </Alert>
              )
              :
              (hours > 1 || (hours == 1 && minutes > 30))
                ? (
                  <Alert colorScheme={"red"}>
                    Cuidado! você demorou demais a escrever!
                  </Alert>
                )
                : null)
          : null}
        <Center {...styles.container} p={5}>
          <Stopwatch
            laps
            start={isStopwatchStart}
            reset={resetStopwatch}
            getTime={(time) => {
              setTime(time);
            }}
            options={{
              text: {
                fontWeight: "600",
                fontSize: 56
              }
            }}
          />
          <HStack px={12} my={5}>
            <Button
              w={"100%"}
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}
              colorScheme={isStopwatchStart ? "amber" : "green"}
              size={"lg"}
            >
              {isStopwatchStart ? (
                <HStack alignItems={"center"}>
                  <Icon name="pause" size={24} color={"white"} />
                  <Text fontSize={18} fontWeight={"bold"} color={"white"} ml={1}>Pausar</Text>
                </HStack>
              ) : (
                <HStack alignItems={"center"}>
                  <Icon name="play" size={24} color={"white"} />
                  <Text fontSize={18} fontWeight={"bold"} color={"white"} ml={1}>Iniciar</Text>
                </HStack>
              )}
            </Button>
            <Modal isOpen={resetModal} onClose={() => setResetModal(false)}>
              <Modal.Content>
                <Modal.Header>Resetar Tempo?</Modal.Header>
                <Modal.Body>
                  Você tem certeza que quer resetar o tempo?
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button variant={"outline"} colorScheme={"gray"} onPress={() => {
                      setResetModal(false);
                    }}>
                      Cancel
                    </Button>
                    <Button colorScheme={"red"} onPress={() => {
                      setResetStopwatch(true);
                      setIsStopwatchStart(false);
                      setResetModal(false);
                    }}>
                      Resetar
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
            <Button
              onPress={() => setResetModal(true)}
              colorScheme={"gray"}
              ml={1}
            >
              <Icon name="refresh-outline" color={"white"} size={24} />
            </Button>
          </HStack>
          {seconds && isStopwatchStart == false
            ? (
              <HStack px={6}>
                <Button onPress={() => setCameraOpen(true)} size={"lg"} width={"100%"} colorScheme={"darkBlue"}>
                  <HStack alignItems={"center"}>
                    <Icon name="camera" color={"white"} size={24} />
                    <Text fontSize={18} fontWeight={"bold"} color={"white"} ml={1}>
                      Digitalizar
                    </Text>
                  </HStack>
                </Button>
              </HStack>
            ) : null}
        </Center>
      </View>

      <View display={cameraOpen ? "flex" : "none"} flex={1} position={"relative"} justifyContent={"flex-end"} alignItems={"center"}>
        {!image
          ? (
            <Box flex={1} position={"absolute"} w={"100%"} h={"100%"}>
              <Camera
                ref={ref => setCamera(ref)}
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                }}
                type={CameraType.back}
                flashMode={flash ? FlashMode.on : FlashMode.off}
              />
            </Box>
          )
          :
          (
            <Image source={{ uri: image }} flex={1} width={"100%"} height={"100%"} alt="Foto da redação" />
          )}
        <HStack position={"absolute"} py={3} w={"100%"}>
          <Button mx={"auto"} onPress={() => setCameraOpen(false)} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="arrow-back" size={28} color={"white"} />
            </HStack>
          </Button>
          <Button mx={"auto"} onPress={() => setImage(null)} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="refresh" size={28} color={"white"} />
            </HStack>
          </Button>
          <Button mx={"auto"} onPress={() => takePicture()} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="camera-outline" size={28} color={"white"} />
            </HStack>
          </Button>
          <Button mx={"auto"} onPress={() => recognizeImageFromUri()} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="enter-outline" size={28} color={"white"} />
            </HStack>
          </Button>
          <Button mx={"auto"} onPress={() => savePicture()} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="download-outline" size={28} color={"white"} />
            </HStack>
          </Button>
          <Button mx={"auto"} onPress={() => setFlash(!flash)} colorScheme={"gray"} w={"56px"} height={"56px"} borderRadius={"56px"}>
            <HStack>
              <Icon name="flash-outline" size={28} color={flash ? "orange" : "white"} />
            </HStack>
          </Button>

        </HStack>
      </View>
    </React.Fragment>
  );
}