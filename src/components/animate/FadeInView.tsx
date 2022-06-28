import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface FadeInViewProp {
  duration: number;
  children: any;
  style: any;
}

const FadeInView = (props: FadeInViewProp) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
