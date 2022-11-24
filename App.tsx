import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Home from "./component/home";
import Calendar from "./component/calendar";
import Account from "./component/account";
import { ShoeInfo } from "./component/shoeInfo";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteContextProvider } from "./context/favorites";
import { ComponentProps } from "react";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NavigateHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ShoeInfo" component={ShoeInfo} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Calendar") {
                iconName = focused ? "calendar" : "calendar-outline";
              } else if (route.name === "Account") {
                iconName = focused ? "people" : "people-outline";
              }

              return <Ionicons name={iconName as ComponentProps<typeof Ionicons>["name"]} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#808080",
            tabBarInactiveTintColor: "#C0C0C0",
          })}
        >
          <Tab.Screen
            name="Home"
            component={NavigateHome}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
