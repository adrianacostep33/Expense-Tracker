import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDay } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const [isFatching, setIsFatching] = useState(true);

  useEffect(() => {
    async function getExpenses() {
      setIsFatching(true);
      const expenses = await fetchExpense();
      setIsFatching(false);

      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, []);

  if (isFatching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
