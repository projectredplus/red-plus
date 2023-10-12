import React from "react";
import { ScrollView } from "native-base";

import { Atividade } from "../../components/atividade";
import { atividades } from "../../assets/data/atividades";

export const AtividadesRoute = "Atividades";

export function Atividades() {
  return (
    <React.Fragment>
      <ScrollView flex={1} padding={3} backgroundColor={"blueGray.700"}>
        {atividades.map(atividade => (
          <Atividade
            key={atividade.name}
            name={atividade.name}
            arquivo={atividade.arquivo}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
}