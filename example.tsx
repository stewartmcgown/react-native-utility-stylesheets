import React from "react";
import { Text, View } from "react-native";
import Layout from "./Layout";

export default function ExampleComponent() {
  return (
    <View
      //   style={{
      //     borderRadius: 8,
      //     marginTop: 6,
      //     paddingBottom: 4,
      //   }}
      style={[Layout.borderRadius8, Layout.marginTop6, Layout.paddingBottom4]}
    >
      <View style={Layout.marginLeft8}>
        <Text>Hello everyone!</Text>
        <View style={[Layout.borderRadius4, Layout.padding4]}></View>
      </View>
    </View>
  );
}
