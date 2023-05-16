import React from "react";
import { Center, Image, Heading, Input, Box, Button, Text } from "native-base";
import { styles } from "./styles";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const HomeRoute = "Home";

export function Home() {
  const [user, setUser] = React.useState(null)
  const [hasUser, setHasUser] = React.useState(null);

  const saveUser = async (value) => {
    await AsyncStorage.setItem('@user', value);
  }

  const getUser = async () => {
    const existingUser = await AsyncStorage.getItem('@user');
    existingUser ? setHasUser(existingUser) : setHasUser(null);
  }

  const handleSubmit = (e) => {
    console.log(user)
    if (user != null) {
      saveUser(user)
      setHasUser(user)
    };
    e.preventDefault();
  }

  React.useEffect(() => {
    getUser()
  }, [])

  return (
    <Center {...styles.container}>
      <Image {...styles.bg} source={bg} alt="Backgorund" />
      <Image {...styles.logo} source={logo} alt="Logo" />
      {hasUser == null
        ? (
          <Box width={"75%"}>
            <Input onChangeText={value => setUser(value)} mb={2} placeholder="Digite seu nome" fontSize={18} />
            <Button onPress={(e) => handleSubmit(e)} colorScheme={"green"}>Enviar</Button>
          </Box>
        )
        : (
          <Heading fontSize={28}>Bem-vindo(a) <Text color={"green.500"}>{hasUser}!</Text></Heading>
        )}
    </Center>
  );
}