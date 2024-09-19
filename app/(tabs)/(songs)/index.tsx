import { View, Text } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import tw from "twrnc";
const SongScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>SongScreen</Text>
    </View>
  );
};

export default SongScreen;
