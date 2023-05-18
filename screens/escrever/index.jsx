import React from "react";
import { Alert, Image, Button, Center, HStack, VStack, Modal, Text, View, Box } from "native-base";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Stopwatch } from "react-native-stopwatch-timer";
import { RichEditor } from "react-native-pell-rich-editor";

export const EscreverRoute = "Escrever";

export function Escrever() {
  const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
  const [resetStopwatch, setResetStopwatch] = React.useState(false);
  const [time, setTime] = React.useState('')
  const [resetModal, setResetModal] = React.useState(false);

  const minutes = +time.slice(-5, -3);
  const hours = +time.slice(-8, -6);
  const seconds = +time.slice(-2);

  console.log(hours, minutes)

  const [flash, setFlash] = React.useState(false);

  const editor = React.useRef();
  const [text, setText] = React.useState(null);

  const editorHandle = (desc) => {
    if (desc) {
      setText(desc);
    } else {
      setText(null);
    }
  }

  return (
    <React.Fragment>

      <View flex={1}>
        {seconds && isStopwatchStart == false
          ? ((hours < 1)
            ? (
              <Alert zIndex={999} colorScheme={"green"}>
                Parabéns! você escreveu em tempo excelente!
              </Alert>
            )
            :
            (hours == 1 && minutes <= 30)
              ? (
                <Alert zIndex={999} colorScheme={"amber"}>
                  Muito bem! você escreveu em tempo aceitável!
                </Alert>
              )
              :
              (hours > 1 || (hours == 1 && minutes > 30))
                ? (
                  <Alert zIndex={999} colorScheme={"red"}>
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
              <View w={"100%"} px={1}>
                <HStack>
                  <RichEditor
                    ref={editor} // from useRef()
                    onChange={editorHandle}
                    placeholder="Digite sua redação aqui"
                    androidHardwareAccelerationDisabled={true}
                    style={{
                      display: "flex",
                      width: "100%",
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: "#ddd",
                    }}
                    initialHeight={300}
                  />
                </HStack>
                <Button mt={2} size={"lg"} width={"100%"} colorScheme={"darkBlue"}>Corrigir (Glau)</Button>
              </View>
            ) : null}
        </Center>
      </View>
    </React.Fragment>
  );
}