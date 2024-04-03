import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text
            style={[
              styles.buttonText,
              mode === "flat " && styles.flatTextStyle,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatTextStyle: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.25,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});