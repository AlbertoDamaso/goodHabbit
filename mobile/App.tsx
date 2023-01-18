import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <Background>
      <NavigationContainer>
        <StatusBar backgroundColor='#006442' barStyle='light-content' translucent={false}/> 
        <Routes/>
      </NavigationContainer>
    </Background>
  );
}