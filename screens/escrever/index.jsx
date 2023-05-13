import React, { Component } from "react";
import { Alert, Box, Button, Center, HStack, Heading, Modal, Text } from "native-base";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

import { Stopwatch } from "react-native-stopwatch-timer";

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

  return (
    <React.Fragment>
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
        <Center mb={5}>
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
        </Center>
        <HStack>
          <Button
            w={"220px"}
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
      </Center>
      <Center>
        <Heading fontWeight={"800"} mb={2}>Classificação</Heading>
        <Alert colorScheme={"green"} alignItems={"center"} p={4} w={"100%"}>
          <HStack alignItems={"center"}>
            <HStack alignItems={"center"} mr={3}>
              <Icon name="time-outline" color={"green"} size={28} />
              <Text color={"green.700"} bold fontSize={18}>Bom</Text>
            </HStack>
            <Text color={"green.700"} fontSize={16}>Redigir em até 60 min</Text>
          </HStack>
        </Alert>
        <Alert colorScheme={"amber"} alignItems={"center"} p={4} w={"100%"}>
          <HStack alignItems={"center"}>
            <HStack alignItems={"center"} mr={3}>
              <Icon name="time-outline" color={"orange"} size={28} />
              <Text color={"amber.500"} bold fontSize={18}>Mediano</Text>
            </HStack>
            <Text color={"amber.500"} fontSize={16}>Redigir em até 1h e 30min</Text>
          </HStack>
        </Alert>
        <Alert colorScheme={"red"} alignItems={"center"} p={4} w={"100%"}>
          <HStack alignItems={"center"}>
            <HStack alignItems={"center"} mr={3}>
              <Icon name="time-outline" color={"red"} size={28} />
              <Text color={"red.500"} bold fontSize={18}>Ruim</Text>
            </HStack>
            <Text color={"red.500"} fontSize={16}>Redigir em mais de 1h e 30min</Text>
          </HStack>
        </Alert>
      </Center>
    </React.Fragment>
  );
}