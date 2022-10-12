import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import IndexScreen from './screens/IndexScreen'; 
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from'./screens/ScreenTwo';
  


const App = ({navigation})  => {
  return (
      <NavigationContainer> 
      <Stack.Navigator initialRouteName="ScreenTwo"> 
        <Stack.Screen 
        name="Index"
        component={IndexScreen}
        options={{title:"AppTech"}}
        />
        <Stack.Screen 
        name="ScreenOne"
        component={ScreenOne}
        options={{title:"Screen 1"}}
        /> 
        <Stack.Screen 
         name="ScreenTwo"
         component={ScreenTwo} 
         options={{title:"Screen 2 "}}
         />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
