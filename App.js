import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/views/Home'
import Copa from './src/views/Copa'
import FasesDaCopaBR from './src/views/FaseXCopaBR'

export default function App() {
  const Stack = createStackNavigator();

// options={{ headerShown: false }}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TwoFootball" component={Home} />
        <Stack.Screen name="Copa do Brasil" component={Copa}/>
        <Stack.Screen name="Fases da Copa Do Brasil" component={FasesDaCopaBR} options={({ route }) => ({ title: route.params.nome })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
