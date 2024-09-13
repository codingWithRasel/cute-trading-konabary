import * as React from "react";
import { AppRegistry, Text } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { SafeAreaView } from "react-native-safe-area-context";
import Cute from "./Pages/Cute";

export default function Main() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Cute />
      </SafeAreaView>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
