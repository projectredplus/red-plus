import { Box, Text, Button, View, Center, Card, VStack, Heading } from "native-base";
import { styles } from "./styles";
import fundo from "../../assets/images/fundo.png";
import { Image } from "react-native";

export const RedacoesRoute = "Redações nota 1000";

function RedacaoCard() {
  const cardStyle = {
    backgroundColor: "transparent",
    ...styles.card,
  };

  const backgroundImageStyle = {
    flex: 1,
    resizeMode: "cover",
    ...styles.backgroundImage,
  };

  return (
    <Card width="50%" my={4} p={4} style={cardStyle}>
      <View style={backgroundImageStyle}>
        <Image source={fundo} style={styles.image} />
      </View>
      <VStack space={4} style={styles.content}>
        <Heading size="md" style={styles.redacaoTitle}>REDAÇÃO DE BÁRBARA</Heading>
        <Button bg={"green.800"} onPress={() => console.log("hello world")} style={styles.button}>
          Conferir Redação
        </Button>
      </VStack>
    </Card>
  );
}

export function Redacoes() {
  return (
    <Box alignItems="center">
      <RedacaoCard />
    </Box>
  );
}