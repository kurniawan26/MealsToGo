import * as React from 'react';
import { Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeArea } from './src/components/utils/safe-area';
import RestaurantsScreen from './src/features/restaurants/screens/restaurant-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant-context';

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  const Tab = createMaterialBottomTabNavigator();

  const TabNavigator = styled(Tab.Navigator).attrs({
    barStyle: {
      backgroundColor: '#fff',
    },
  })``;

  const iconOption = (name) => {
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return {
      tabBarLabel: capitalized,
      tabBarIcon: ({ color }) => (
        <Ionicons name={name} color={color} size={20} />
      ),
    };
  };

  const MyTabs = () => {
    return (
      <TabNavigator activeColor="tomato" inactiveColor="gray">
        <Tab.Screen
          name="Restaurant"
          component={RestaurantsScreen}
          options={iconOption('restaurant')}
        />
        <Tab.Screen name="Map" component={Map} options={iconOption('map')} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={iconOption('settings')}
        />
      </TabNavigator>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
