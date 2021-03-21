import 'react-native-gesture-handler';
import React from "react";
// Components React-Native
import { View, StatusBar } from "react-native";
// Navigation
import { NavigationContainer } from '@react-navigation/native';
// Routes
import Routes from "./routes";

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }} >
      <Routes />
    </View>
  </NavigationContainer>
);


export default App;
