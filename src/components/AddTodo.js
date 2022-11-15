import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { data, error } = await supabase.from("todo").insert([
      {
        tasks: todo,
      },
    ]);
    setLoading(false);
    setTodo("");
  };
  return (
    <View>
      <TextInput
        placeholder="Add Todo Tasks"
        value={todo}
        onChangeText={(e) => setTodo(e)}
        style={styles.input}
      />
      <Button
        title="Add Todo Tasks"
        isLoading={loading}
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
