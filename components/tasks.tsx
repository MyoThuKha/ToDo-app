import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

interface tasksProps {
  foreground: () => string;
}

const Tasks: React.FC<tasksProps> = ({ foreground }) => {
  return (
    <View style={[styles.section2, { backgroundColor: foreground() }]}>
      <Text style={styles.title}>Your Routine</Text>
      <Text>Drink 1 glass of water</Text>
      <Text>Meditate for 10 mins</Text>
    </View>
  );
};
export default Tasks;

const styles = StyleSheet.create({
  section2: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: 28,
  },
});
