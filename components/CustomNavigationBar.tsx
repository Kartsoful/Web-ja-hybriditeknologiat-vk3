import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { StackHeaderProps } from "@react-navigation/stack";

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);


  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      {title === "Home" ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("SecondScreen")}
        />
      ) : (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
    </Appbar.Header>
  );
}
