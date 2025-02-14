import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { useTrendingToday } from 'store/trending-today/hooks';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  hasTVPreferredFocus?: boolean;
}

const TrendingTodaySwimlane = ({ hideTitle, hasTVPreferredFocus }: Props) => {
  const { data, isLoading, isEmpty, hasError } = useTrendingToday({
    fetch: true,
  });

  if (isEmpty) {
    // render empty state?
    return null;
  }

  if (hasError) {
    // render error state?
    return null;
  }

  return (
    <View style={styles.container}>
      <TVFocusGuideView trapFocusLeft trapFocusRight>
        {!hideTitle && <Text style={styles.title}>Trending today</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={isLoading && data.length === 0 ? new Array(6).fill(null) : data}
          keyExtractor={(item, index) =>
            `swimlane.trending-today.${item?.id || index}`
          }
          renderItem={({
            item,
            index,
          }: {
            item: Movie | Show | null;
            index: number;
          }) => (
            <Item
              id={item?.id || null}
              type={item?.type || null}
              hasTVPreferredFocus={hasTVPreferredFocus && index === 0}
            />
          )}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(TrendingTodaySwimlane);
