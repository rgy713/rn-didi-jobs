import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const themestyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    mapContainer: {
      width: width,
      height: height,
    },
    goOfflineBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.4,
      height: 50,
      justifyContent: 'center',
      borderRadius: 46,
    },
    goOnlineBtn: {
      backgroundColor: theme.Colors.green,
      width: width * 0.4,
      height: 50,
      justifyContent: 'center',
      borderRadius: 46,
    },
    statusBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.szie16,
      lineHeight: 17,
      color: 'white',
      textAlign: 'center',
    },
    viewJobBtn: {
      backgroundColor: theme.Colors.blue,
      width: width * 0.4,
      height: 50,
      justifyContent: 'center',
      borderRadius: 46,
    },
    statusButtonContainer: {
      position: 'absolute',
      width: width,
      bottom: 150,
      alignItems: 'center',
    },
    menuBtn: {
      position: 'absolute',
      width: 50,
      height: 50,
      backgroundColor: '#E3AB1A',
      top: 40,
      left: 20,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuBtnText: {
      color: theme.Colors.white,
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoBold,
      fontWeight: theme.Fonts.Weight.full,
    },
    locationButtonContainer: {
      position: 'absolute',
      width: 50,
      height: 50,
      bottom: 150,
      right: width * 0.2 - 25,
      backgroundColor: theme.Colors.white,
      borderRadius: 100,
      overflow: 'hidden',
    },
    locationImg: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
};

export default themestyles;
