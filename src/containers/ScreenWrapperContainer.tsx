import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  BackHandler,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Header from '../components/Header';

interface ScreenContainerProps {
  mainContainerStyle: any;
  headerContainerStyle?: any;
  backDisabled?: boolean;
  isHeader: boolean;
  handleLeftBtnPress?: () => void;
  children: any;
}

const ScreenWrapperContainer = (props: ScreenContainerProps) => {
  const renderHeader = () => {
    return (
      <Header
        styles={props.headerContainerStyle}
        onBackBtnPress={props.handleLeftBtnPress}
      />
    );
  };

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
    if (props.isHeader) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          props.isHeader &&
            props.handleLeftBtnPress &&
            props.handleLeftBtnPress();
          return true;
        },
      );
      return () => backHandler.remove();
    } else {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }
  }, [props.backDisabled]);

  return (
    <SafeAreaView style={props.mainContainerStyle}>
      {props.isHeader && renderHeader()}
      <KeyboardAvoidingView
        style={props.mainContainerStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

ScreenWrapperContainer.propTypes = {
  mainContainerStyle: PropTypes.any,
  headerContainerStyle: PropTypes.any,
  backDisabled: PropTypes.bool,
  handleLeftBtnPress: PropTypes.func,
  isHeader: PropTypes.bool,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenWrapperContainer;
