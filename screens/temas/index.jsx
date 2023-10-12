import React from "react";
import { ScrollView} from "native-base";
import { Tema } from "../../components/tema";
import { temas } from "../../assets/data/temas"


export const TemasRoute = "Possíveis temas";

export function Temas() {
  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3} backgroundColor={"blueGray.700"}>
        {temas.map(tema => (
          <Tema
            key={tema}
            tema={tema}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
}