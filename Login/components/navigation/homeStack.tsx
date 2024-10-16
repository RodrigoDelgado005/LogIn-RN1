// Importamos React y las librerías necesarias para la navegación
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '/RN1/Login/app/(tabs)/index';
import Login from '/RN1/Login/app/(tabs)/Login';

// Definir el tipo de parámetros para el stack de navegación
type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
};

// Crear el stack de navegación
const Stack = createStackNavigator<RootStackParamList>();

// Componente que define la navegación del HomeStack
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
        },
      }}
    >
      {/* Pantalla de inicio y Login */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

// Componente contenedor para la navegación de la aplicación
const AppContainer = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppContainer;
