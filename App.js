import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={tw`bg-red-500 flex-grow justify-center items-center`}>
      <Button
        title="버튼"
        onPress={() => {
          console.log("HI");
        }}
      ></Button>
      <Text style={tw`bg-green-500 p-10 rounded`}>잘된다!111</Text>
      <StatusBar style="auto" />
    </View>
  );
}
