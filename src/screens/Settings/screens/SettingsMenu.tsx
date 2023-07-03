import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Button, ScrollView } from 'react-native';

const SettingsMenu = () => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  const goToDeviceInfo = () => {
    navigate(Route.DeviceInfo);
  };

  return (
    <>
      <ScrollView>
        <Button title="Device Info" onPress={goToDeviceInfo} />
      </ScrollView>
    </>
  );
};

export default memo(SettingsMenu);
