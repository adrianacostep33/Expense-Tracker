import { StyleSheet, FlatList, Text } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
