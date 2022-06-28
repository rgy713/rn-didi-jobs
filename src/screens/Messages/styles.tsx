import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const themestyles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
      paddingBottom: 15,
    },
    headingTextCotainer: {
      marginTop: 0,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    headingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 30,
    },
    viewContainer: {
      paddingHorizontal: 12,
    },
    container: {
      height: 60,
      width: '100%',
      marginBottom: 3,
      borderBottomWidth: 2,
      borderBottomColor: theme.Colors.lightGray,
    },
    item: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.Colors.white,
    },
    itemContainer: {
      alignContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemRow: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 15,
    },
    itemAvatar: {
      backgroundColor: theme.Colors.grey,
      width: 50,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
    itemTitle: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size13,
      lineHeight: 25,
      color: theme.Colors.black,
    },
    itemSubTitle: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 20,
      color: '#94A3B8',
    },
    btnContainer: {
    },
    btn: {
      height: '100%',
      width: 60,
      backgroundColor: theme.Colors.white,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: theme.Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 15,
    },
    dateView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hideIcon: {width: 15, height: 15, marginTop: 5},    
    toggleTab: {
      alignContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    toggleMenueItem: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    toggleMenuTitle: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontWeight: theme.Fonts.Weight.semi,
      lineHeight: 20,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size18,
    },
    toggleMenuIcon: {
      width: 30,
      height: 30,
      marginTop: 5,
    },
  });
};

export default themestyles;
