import { View, Text } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Artists" }} />
      </Stack>
    </View>
  );
};

export default ArtistsScreenLayout;
