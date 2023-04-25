import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { useTrendingToday } from 'store/trending-today/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  hasInitialFocus?: boolean;
}

const TrendingTodaySwimlane = ({ hideTitle, hasInitialFocus }: Props) => {
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
          renderItem={({ item, index }) => (
            <Item
              item={item}
              hasTVPreferredFocus={hasInitialFocus && index === 0}
            />
          )}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(TrendingTodaySwimlane);
