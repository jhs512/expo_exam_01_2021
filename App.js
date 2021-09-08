import { StatusBar } from "expo-status-bar";
import React, { Children, useState } from "react";
import Constants from "expo-constants";
import tw from "tailwind-react-native-classnames";
import { ScrollView, Text, View } from "react-native";
import {
  Badge,
  Chip,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";

const Main = () => {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState(0);

  const saveNumber = () => {
    setNumbers([...numbers, number]);
    setNumber(0);
  };

  return (
    <>
      <View style={tw`flex-row self-center mt-10`}>
        <Button onPress={() => setNumber(number + 1)}>증가</Button>
        <Button onPress={() => setNumber(0)}>초기화</Button>
        <Button onPress={saveNumber}>기록</Button>
        <Chip mode="outlined">
          <Text>{number}</Text>
        </Chip>
      </View>
      <ScrollView>
        {numbers.map((number, index) => (
          <Text key={index} style={tw`p-10`}>
            {number}
          </Text>
        ))}
      </ScrollView>
    </>
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
