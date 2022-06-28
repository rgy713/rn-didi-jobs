import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import strings from '../../i18n';
import CustomSwipePopup from './CustomSwipePopup';
import {useTheme} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';

const {height, width} = Dimensions.get('window');

interface Props {
  title: string;
  text: string;
  onCancelPress: () => void;
  onConfirmPress: () => void;
}

const CustomDialogPopUp = (props: Props) => {
  const [panelHeight, setPanelHeight] = useState(0);
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <CustomSwipePopup
      noSensitive={true}
      noLine={true}
      onHide={props.onCancelPress}>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>{props.title}</Text>
          <Text style={styles.contentText}>{props.text}</Text>
        </View>
        <View style={styles.btnBox}>
          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={props.onCancelPress}
              style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>{strings.Cancel}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={props.onConfirmPress}
              style={styles.confirmBtn}>
              <Text style={styles.confirmBtnText}>{strings.Confirm}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomSwipePopup>
  );
};

const useStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      width: width,
      height: 200,
      backgroundColor: theme.Colors.white,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      overflow: 'hidden',
    },
    contentBox: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
    },
    contentTitle: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      color: theme.Colors.black,
      paddingVertical: 12,
    },
    contentText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      color: theme.Colors.black,
      paddingVertical: 15,
    },
    btnBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    btnView: {
      width: '50%',
      paddingHorizontal: 5,
    },
    cancelBtn: {
      width: '100%',
      fontSize: theme.Fonts.Size.size15,
      padding: 19,
      borderRadius: 46,
      paddingVertical: 15,
      backgroundColor: theme.Colors.lightGray,
    },
    cancelBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    confirmBtn: {
      width: '100%',
      backgroundColor: theme.Colors.primaryBtn,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
      paddingVertical: 15,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default CustomDialogPopUp;
