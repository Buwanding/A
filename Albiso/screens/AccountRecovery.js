import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View } from "react-native";
import React from 'react';
import { Button, Text, TextInput } from "react-native-paper";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'violet', 
  },
};
const  AccountRecovery = ({ navigation }) => {
  return (
    <PaperProvider theme={theme}>
      <View><Button
        onPress={() => navigation.navigate("Login")}
        icon="arrow-left"
        mode="elevated"
        style={{ marginTop: 10, alignContent:'flex-start',alignItems:"flex-start" }}
      >
      </Button></View>
        <View style={{ flex: 1, justifyContent: "center" }}>
      <Text variant="displayMedium" style={{marginLeft: 20, marginBottom: 10, color: 'red', fontWeight:
    'bold'}}>AccountRecovery</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10, color: 'blue' }}

      />
      
      <Button
        onPress={() => {alert('Succesful Email');navigation.navigate("Login")}}
        icon="arrow-right"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Send to Email
      </Button>
    </View>
    </PaperProvider>
    
  )
}

export default AccountRecovery