import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

interface Props {
  onHide: () => void;
  noLine?: boolean;
  noSensitive?: boolean;
  children: any;
}

const CustomSwipePopup = (props: Props) => {
  const [panelHeight, setPanelHeight] = useState(0);
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <TouchableOpacity style={styles.swipeWrapper} onPress={props.onHide}>
      <SlidingUpPanel
        ref={c => c?.show()}
        draggableRange={{top: panelHeight, bottom: -30}}
        showBackdrop={true}
        backdropOpacity={0.1}
        onDragEnd={value => {
          if (value < panelHeight * (props.noSensitive ? 0.8 : 0.95)) {
            props.onHide();
          }
        }}>
        <TouchableOpacity
          style={styles.swipeLayoutContainer}
          onLayout={event => {
            setPanelHeight(event.nativeEvent.layout.height);
          }}
          onPress={() => {}}
          activeOpacity={1}>
          {!props.noLine && <View style={styles.line} />}
          {props.children}
        </TouchableOpacity>
      </SlidingUpPanel>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const useStyles = (theme: any) => {
  return StyleSheet.create({
    swipeWrapper: {
      position: 'absolute',
      height: height,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.Colors.backDrop,
    },
    swipeLayoutContainer: {
      bottom: 0,
      backgroundColor: theme.Colors.primaryBg,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      paddingHorizontal: 12,
      paddingTop: 10,
      alignItems: 'center',
    },
    line: {
      width: 65,
      height: 3,
      alignSelf: 'center',
      marginVertical: 20,
      borderRadius: 2,
      backgroundColor: theme.Colors.modalLine,
    },
  });
};

export default CustomSwipePopup;
