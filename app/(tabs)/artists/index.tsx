import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Card, Button } from "react-native-paper";
import { defaultStyles } from "@/styles";

const index = () => {
  return (
    <View style={defaultStyles.container}>
      <Card>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Ok
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default index;
