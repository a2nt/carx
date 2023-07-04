import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { ScrollView } from 'react-native';

const SettingsMenu = () => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  const goToDeviceInfo = () => {
    navigate(Route.DeviceInfo);
  };

  return (
    <>
      <ScrollView>
        <Button onPress={goToDeviceInfo}>Device Info</Button>
      </ScrollView>
    </>
  );
};

export default memo(SettingsMenu);
