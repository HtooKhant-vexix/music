import { View, Text } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const SongScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Song" }} />
      </Stack>
    </View>
  );
};

export default SongScreenLayout;
