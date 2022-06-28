import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type SuccessNavProps = StackNavigationProp<RootStackParamList, 'Success'>;

interface SuccessProps {
  route: any;
}

export const Success = (props: SuccessProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<SuccessNavProps>();
  const {title, nextScreen} = props.route.params;

  const goNext = () => {
    navigation.dispatch(StackActions.replace(nextScreen));
  };

  useEffect(() => {
    setTimeout(() => {
      goNext();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapperContainer
      isHeader={false}
      mainContainerStyle={styles.mainContainer}>
      <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.successImg}
            source={require('../../assets/images/CircleCheck.png')}
          />
        </View>
      </View>
    </ScreenWrapperContainer>
  );
};

export default Success;
