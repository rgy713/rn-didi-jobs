import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface HeaderProps {
  styles: any;
  onBackBtnPress?: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={props.styles}>
      <TouchableOpacity onPress={props.onBackBtnPress} style={styles.backBtn}>
        <Image source={require('../assets/images/Back.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
