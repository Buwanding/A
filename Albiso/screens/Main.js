import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import React from 'react';
import { View,Image } from 'react-native';
import { Appbar, Card,Text } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'violet',
  },
};

const Main = ({ navigation }) => {

  return (
    <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
      <Appbar.Header >
        <Appbar.Content title="Hi I am cat name Tiger" />
        <Appbar.Action icon="logout" onPress={() => navigation.navigate("Login")}
        mode="contained"
        style={{ marginTop: 10 }} />
        
      </Appbar.Header>
      <View style={{justifyContent: "center", alignItems : "center", marginTop: 100 }}>
      <Image
          source={require('../assets/cat.jpg')}
          style={{width: 200, // Set the width of your image
          height: 200, // Set the height of your image
          resizeMode: 'cover', }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card>
          <Card.Content style={{flex: 1, justifyContent: 'center'}}>
            <Text variant="displaySmall" style={{color: theme.colors.primary}} >Welcome to My Main Page</Text>
            <Text variant="headlineLarge">Albiso HomePage.</Text>
          </Card.Content>
        </Card>
      </View>


    </View>
    </PaperProvider>
    
  );
};

export default Main;
