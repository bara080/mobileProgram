import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredText, key: Math.random().toString() }]);
  };

  function deleteGoalHandler(key)
  {
    setCourseGoals(currentCourseGoals =>
      {
        return currentCourseGoals.filter((goal) => goal.key !== key );
      })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} onDeleteItem = {deleteGoalHandler} />}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});

export default App;
