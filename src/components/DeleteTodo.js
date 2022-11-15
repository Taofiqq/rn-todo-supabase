import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Entypo } from "@expo/vector-icons";

const DeleteTodo = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const handleDeleteTodo = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("todo").delete().eq("id", id);
    setLoading(false);
  };
  return (
    <View>
      <TouchableOpacity onPress={handleDeleteTodo} isLoading={loading}>
        <Entypo name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default DeleteTodo;

const styles = StyleSheet.create({});
