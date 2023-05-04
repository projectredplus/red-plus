import React from "react";
import { Center, Image, Heading } from "native-base";
import { styles } from "./styles";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/logo.png";

export const HomeRoute = "Home";

export function Home() {
  return (
    <Center {...styles.container}>
      <Image {...styles.bg} source={bg} />
      <Image {...styles.logo} source={logo} />
      <Heading {...styles.title}>Bem Vindo, Renan!</Heading>
    </Center>
  );
}