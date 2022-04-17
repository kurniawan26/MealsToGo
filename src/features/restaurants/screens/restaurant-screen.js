import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Restaurantinfo from '../components/restaurant-info';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer-component';

import { SafeArea } from '../../../components/utils/safe-area';
import { RestaurantContext } from '../../../services/restaurants/restaurant-context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Cari disini" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Spacer position="bottom" size="large">
              <Restaurantinfo restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
