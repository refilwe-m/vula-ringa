import { View, Text } from "react-native";
import { useTailwindCss } from "../../hooks/useTailwind";

export default function HomeScreen() {
  const tw = useTailwindCss();
  return (
    <View style={tw("bg-red-500")}>
      <Text>Test</Text>
    </View>
  );
}
