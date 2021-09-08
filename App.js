import { StatusBar } from "expo-status-bar";
import React, { Children, useState } from "react";
import Constants from "expo-constants";
import tw from "tailwind-react-native-classnames";
import { Text, View } from "react-native";
import {
  Badge,
  Chip,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";

const Main = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={tw`flex-row self-center mt-10`}>
      <Button onPress={() => setNumber(number + 1)}>증가</Button>
      <Chip mode="outlined">
        <Text>{number}</Text>
      </Chip>
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
