import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Props = NativeStackScreenProps<any>;

export default function HomeScreen({ navigation }: Props) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="arrow-forward"
          size={24}
          style={{ marginRight: 0, padding: 0 }}
          onPress={() => navigation.navigate("SecondScreen")}
        />
      ),
    });
  }, []);

  return (
    <View style={style.container}>
      <Text>HomeScreen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
