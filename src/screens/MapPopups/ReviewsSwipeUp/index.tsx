import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import BigStarIcon from '../../../assets/icons/BigStarIcon';
import CustomSwipePopup from '../../../components/custom/CustomSwipePopup';
import strings from '../../../i18n';
import useStyles from './styles';

interface Props {
  onHide: () => void;
}

const data = {
  poster: 'Sadie Jeq',
  since: '15 mar 2021',
  total_rate: 98.5,
  reviews: [
    {
      rate: 4,
      feedback:
        'Sadie was great to work for, she was very nice and paid quickly',
    },
    {
      rate: 4,
      feedback:
        'Sadie was great to work for, she was very nice and paid quickly',
    },
    {
      rate: 4,
      feedback:
        'Sadie was great to work for, she was very nice and paid quickly',
    },
    {
      rate: 4,
      feedback:
        'Sadie was great to work for, she was very nice and paid quickly',
    },
  ],
};

const ReviewsSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderItem = (data: {item: any}) => {
    return (
      <View style={styles.innerContainer}>
        <View style={styles.ratings}>
          <View style={styles.star}>
            <BigStarIcon />
          </View>
          <View style={styles.star}>
            <BigStarIcon />
          </View>
          <View style={styles.star}>
            <BigStarIcon />
          </View>
          <View style={styles.star}>
            <BigStarIcon />
          </View>
          <View style={styles.star}>
            <BigStarIcon />
          </View>
        </View>
        <Text style={styles.feedbackText}>{data.item.feedback}</Text>
      </View>
    );
  };

  return (
    <CustomSwipePopup onHide={props.onHide}>
      <View style={styles.headerContainer}>
        <View style={styles.itemRow}>
          <Text style={styles.itemTitle}>{strings.Poster}:</Text>
          <Text style={styles.itemText}>{data.poster}</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemTitle}>{strings.PostingSince}:</Text>
          <Text style={styles.itemText}>{data.since}:</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemTitle}>{strings.PositiveFeedbackTotal}:</Text>
          <Text style={styles.itemText}>{data.total_rate}%</Text>
        </View>
      </View>
      <FlatList
        style={styles.listBox}
        data={data.reviews}
        renderItem={renderItem}
      />
    </CustomSwipePopup>
  );
};

export default ReviewsSwipeUp;
