import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

function CartItem() {
  return (
    <View style={styles.carContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text>Setting</Text>
        <Text>MyMobile</Text>
        <Text>Surprize</Text>
      </View>
    </View>
  );
}

export default CartItem;
