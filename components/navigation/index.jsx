import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, HomeRoute } from "../../screens/home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Redacoes, RedacoesRoute } from "../../screens/redacoes";
import { Escrever, EscreverRoute } from "../../screens/escrever";
import { Atividades, AtividadesRoute } from "../../screens/atividades";
import { theme as customTheme } from "../../assets/themes/dark";
import { Temas, TemasRoute } from "../../screens/temas";
import { extendTheme } from "native-base";
import { AreaAluno, AreaAlunoRoute } from "../../screens/areaAluno";
import { Desafio, DesafioRoute } from "../../screens/desafio";

const Tab = createBottomTabNavigator();
const iconSize = 32;

const theme = extendTheme(customTheme);

export function NavigationRoutes() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.blueGray[700],
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: theme.colors.blueGray[700],
          borderTopWidth: 1,
          borderTopColor: theme.colors.blueGray[400],
        },
        tabBarLabelStyle: {
          fontSize: 13,
          display: "none"
        },
        tabBarInactiveTintColor: theme.colors.blueGray[300],
        tabBarActiveTintColor: theme.colors.primary[500]
      }}
    >
      <Tab.Screen
        name={HomeRoute}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="home-outline" color={color} size={iconSize} />)
        }}
      />
      <Tab.Screen
        name={RedacoesRoute}
        component={Redacoes}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="trophy-outline" color={color} size={iconSize} />)
        }}
      />
      <Tab.Screen
        name={EscreverRoute}
        component={Escrever}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="pencil-outline" color={color} size={iconSize} />)
        }}
      />
      <Tab.Screen
        name={AtividadesRoute}
        component={Atividades}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="play-outline" color={color} size={iconSize} />)
        }}
      />
      <Tab.Screen
        name={TemasRoute}
        component={Temas}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="file-document-outline" color={color} size={iconSize} />)
        }}
      />
      <Tab.Screen
        name={DesafioRoute}
        component={Desafio}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="trophy-award" color={color} size={iconSize} />)
        }}
      />
      <Tab.Screen
        name={AreaAlunoRoute}
        component={AreaAluno}
        options={{
          tabBarIcon: ({ color }) => (<Icon name="account-outline" color={color} size={iconSize} />)
        }}
      />

    </Tab.Navigator>
  )
}