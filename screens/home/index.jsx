import React from "react";
import { Center, Image, Heading, Input, Box, Button, Text } from "native-base";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const HomeRoute = "Home";

export function Home({ navigation }) {
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
    navigation.addListener('focus', () => {
      getUser();
    })
    getUser()
  }, [navigation])

  return (
    <Center flex={1} backgroundColor="white">
      <Image position={"absolute"} w={"100%"} h={"100%"} zIndex={0} source={bg} alt="Background" />
      <Image w={"200px"} h={"200px"} source={logo} alt="Logo" />
      <Text textAlign={"center"} w={"85%"} mb={3.5} fontSize={17}>
        <Text bold>RedPlus:</Text> O uso das tecnologias aliadas ao ensino de redação rumo a <Text bold>nota máxima!</Text>
      </Text>
      {hasUser == null
        ? (
          <React.Fragment>
            <Heading fontSize={28} fontWeight={"900"} mb={3}>Bem vindo ao RedPlus!</Heading>
            <Box width={"75%"}>
              <Input backgroundColor={"white"} onChangeText={value => setUser(value)} mb={2} placeholder="Digite seu nome" fontSize={18} />
              <Button onPress={(e) => handleSubmit(e)} colorScheme={"amber"}>Enviar</Button>
            </Box>
          </React.Fragment>
        )
        : (
          <Heading fontSize={30}>Bem-vindo(a) <Text>{hasUser}!</Text></Heading>
        )}
    </Center>
  );
}