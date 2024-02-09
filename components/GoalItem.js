import React from 'react';
import { StyleSheet, Text, View , Pressable} from 'react-native';

const GoalItem = (props) => {
  return (
    <Pressable onPress ={props.onDeleteItem}>
        <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
