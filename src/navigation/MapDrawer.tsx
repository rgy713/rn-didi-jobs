import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Alert, BackHandler, View} from 'react-native';
import {RootStackParamList} from './StackNavigator';
import {GET_STARTED, MAP_AREA} from '../constants/ScreensName';
import MapArea from '../screens/MapArea';
import AppMenuContainer from '../containers/AppMenuContainer';

type MapDrawerProps = StackNavigationProp<RootStackParamList, 'MapDrawer'>;

export const MapDrawer = (props: any) => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation<MapDrawerProps>();

  const backAction = () => {
    Alert.alert('Hold on!', 'This app will be closed. Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'front', swipeEnabled: false}}
      drawerContent={props => <AppMenuContainer {...props} />}>
      <Drawer.Screen
        name={MAP_AREA}
        component={MapArea}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
