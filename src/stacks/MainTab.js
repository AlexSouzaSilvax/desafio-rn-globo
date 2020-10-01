import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
const TabBar = createBottomTabNavigator();

import Home from "../screens/Home";
import Favoritos from "../screens/Favoritos";
import colors from "../styles/colors";

import { selectQtdFavoritedFilmes } from "../../src/store/Filmes/Filmes.selectors";

export default function MainTab() {
  const qtdFilmesFavoritos = useSelector(selectQtdFavoritedFilmes);

  return (
    <TabBar.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Favoritos":
              iconName = "staro";
              break;
            default:
              iconName = "home";
              break;
          }

          return <IconAntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.pretoClaro,
          borderTopColor: colors.pretoClaro,
        },
        activeBackgroundColor: colors.pretoClaro,
        inactiveBackgroundColor: colors.pretoClaro,
        activeTintColor: colors.verdeClaro,
        inactiveTintColor: colors.cinzaClaro2,
        showLabel: false,
      }}
    >
      <TabBar.Screen name="Home" component={Home} />
      <TabBar.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ tabBarBadge: qtdFilmesFavoritos }}
      />
    </TabBar.Navigator>
  );
}
