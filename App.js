import { StatusBar } from "expo-status-bar";
import React, { Children, useState } from "react";
import Constants from "expo-constants";
import tw from "tailwind-react-native-classnames";
import produce from "immer";
import { ScrollView, Text, View } from "react-native";
import {
  Badge,
  Chip,
  Provider as PaperProvider,
  Button,
} from "react-native-paper";

const NumListItem = ({ number, id, delNumber }) => {
  return (
    <View style={tw`p-10 flex-row items-center`}>
      <Text>{id}</Text>
      <Text style={tw`ml-2`}>{number}</Text>
      <Button onPress={() => delNumber(id)}>삭제</Button>
    </View>
  );
};

const NumList = ({ numbers, delNumber }) => {
  return (
    <View>
      <Text>기록 개수 : {numbers.length}</Text>
      <ScrollView>
        {numbers
          .slice(0)
          .reverse()
          .map((number, index) => (
            <NumListItem
              key={index}
              number={number.number}
              id={number.id}
              delNumber={delNumber}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const Main = () => {
  const [numbersLastId, setNumbersLastId] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState(0);

  const id = numbersLastId + 1;

  const saveNumber = () => {
    //setNumbers([...numbers, { id, number }]);
    setNumbers(
      produce(numbers, (draft) => {
        draft.push({ id, number });
      })
    );

    setNumbersLastId(id);
    setNumber(0);
  };

  const delNumber = (id) => {
    setNumbers(
      produce(numbers, (draft) => {
        draft.splice(
          draft.findIndex((num) => num.id == id),
          1
        );
      })
    );
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
      <NumList numbers={numbers} delNumber={delNumber} />
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
