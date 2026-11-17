import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="arrow-forward"
          size={24}
          style={{ marginRight: 0, padding: 0 }}
          color= '#ff0000'
          onPress={() => navigation.navigate("SecondScreen")}
        />
      ),
    });
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.text}>HomeScreen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20
  }
});
