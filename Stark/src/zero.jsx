import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, Pressable } from "react-native";

const App = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
  });

  const handlelogin = async () => {
    try {
      if (userDetails.username === "") {
        throw new Error("Please fill all fields");
      }
      Alert.alert("Great Work", "Well done");
    } catch (error) {
      Alert.alert("Something went wrong", error.message);
    }
  };

  return (
    <View style={styles.loginPageContainer}>
      <Text style={styles.title}>User Registration</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChangeText={(text) =>
            setUserDetails((prev) => ({
              ...prev,
              username: text,
            }))
          }
        />
      </View>

    

      <Button title="Login" onPress={handlelogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color:"red"
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
