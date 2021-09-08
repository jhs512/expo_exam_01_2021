import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import tw from "tailwind-react-native-classnames";
import { Button, Text, View } from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";

const Main = () => {
  return (
    <View>
      <TextInput />
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <View
        style={tw.style(`flex-grow`, {
          paddingTop: Constants.statusBarHeight,
        })}
      >
        <Main />
      </View>
    </PaperProvider>
  );
}
