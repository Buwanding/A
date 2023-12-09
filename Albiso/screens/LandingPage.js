import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View,Image } from "react-native";
import React from 'react';
import { Button, Text } from "react-native-paper";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'violet', 
  },
};
const LandingPage = ({ navigation }) => {
  return (
    <PaperProvider theme={theme}>
      <View style={{justifyContent: "center", alignItems : "center", marginTop: 100 }}>
      <Image
          source={require('../assets/cat.jpg')}
          style={{width: 200, // Set the width of your image
          height: 200, // Set the height of your image
          resizeMode: 'cover', }}
        />
      </View>
      <View style={{ flex: 1,justifyContent: "start" }}>
        
      <Text variant="displayMedium" style={{textAlign:'center', marginBottom: 10, color: '#33cccc', fontWeight:
    'bold'}}>LandingPage</Text>
      <Button 
       onPress={() => navigation.navigate("Login")}
      icon="login" 
      mode="contained" 
      style={{ marginTop: 10,borderBlockColor: '#33cccc' }}>
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
    </View>
    </PaperProvider>
    
  )
}

export default LandingPage