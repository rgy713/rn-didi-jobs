import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import useStyles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {MAP_DRAWER, PAYMENT_OVERVIEW} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';

type DataType = {
  name: string;
  visaDesc: string;
  date: string;
  jobId: string;
  rate: string;
  status: string;
};

const data: DataType[] = [
  {
    name: 'Furniture Assembly',
    visaDesc: 'ending in 102',
    date: 'April 10',
    jobId: 'Job #123-123-12311',
    rate: '$50.12',
    status: 'done',
  },
  {
    name: 'Furniture Assembly',
    visaDesc: 'ending in 102',
    date: 'April 10',
    jobId: 'Job #123-123-12312',
    rate: '$40.22',
    status: 'done',
  },
  {
    name: 'Furniture Assembly',
    visaDesc: 'ending in 102',
    date: 'April 10',
    jobId: 'Job #123-123-12313',
    rate: '$49.10',
    status: 'pending',
  },
];

type PaymentProps = StackNavigationProp<RootStackParamList, 'MyJobs'>;

const MyJobs = (props: any) => {
  const navigation = useNavigation<PaymentProps>();
  const theme = useTheme();
  const styles = useStyles(theme);

  const handleBackBtnPress = () => {
    navigation.navigate(MAP_DRAWER);
  };

  const renderItem = (data: {item: DataType}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // TODO Fix me
          // should be response of server with job id
          navigation.navigate(PAYMENT_OVERVIEW);
        }}>
        <View style={styles.itemRow1}>
          <Text style={styles.assemble}>{data.item.name}</Text>
          <Text style={styles.contain}>{data.item.date}</Text>
        </View>
        <View style={styles.itemRow1}>
          <View style={styles.itemRow2}>
            <Image
              style={{width: 26, height: 15, marginRight: 5}}
              source={require('../../assets/images/Visa.png')}
            />
            <Text style={styles.textColor}>{data.item.visaDesc}</Text>
          </View>
          {data.item.status == 'pending' && (
            <Text style={styles.pendingText}>{strings.PendingPayment}</Text>
          )}
        </View>
        <View style={styles.itemRow1}>
          <Text style={styles.textColor}>{data.item.jobId}</Text>
          <Text style={styles.assemble}>{data.item.rate}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.headingTextCotainer}>
        <Text style={styles.headingText}>{strings.MyJobs}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.jobId}
        style={styles.stepsContainer}
      />
    </ScreenWrapperContainer>
  );
};

export default MyJobs;
