import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    let { data: todo, error } = await supabase.from("todo").select("*");
    setTodos(todo);
    // console.log(todo);
  };

  useEffect(() => {
    fetchTodos();
  });

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text>No More Todo Tasks</Text>
      </View>
    );
  }
  return (
    <View>
      {
        // Render the todos
        todos.map((todo) => (
          <View key={todo.id} style={styles.container}>
            <Text style={styles.task}>{todo.tasks}</Text>
            <DeleteTodo id={todo.id} />
          </View>
        ))
      }
    </View>
  );
};

export default ListTodo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  task: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 100,
  },
});
