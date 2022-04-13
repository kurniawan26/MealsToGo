import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Restaurantinfo from '../components/restaurant-info';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Cari disini" />
      </SearchContainer>
      <RestaurantListContainer>
        <Restaurantinfo />
      </RestaurantListContainer>
    </SafeArea>
  );
}
