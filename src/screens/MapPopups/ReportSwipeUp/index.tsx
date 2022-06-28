import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text} from 'react-native';
import CustomSwipePopup from '../../../components/custom/CustomSwipePopup';
import useStyles from './styles';

interface Props {
  onHide: () => void;
}

const data = [
  'Scam',
  'Abusive or harmful content',
  'Prejudice, sterotypes, slurs',
  'Inappropriate language',
  'No Intent to hire',
  'Sexually explicit content(nudity or pornography)',
  'Dangerous goods(drugs, weapons, explosives',
  'Isensitive content or inappropriate imagery',
  'Inappropriate job type',
  'Mesleading or repetitive post',
];

const ReportSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderItem = (data: {item: string}) => {
    return <Text style={styles.listItem}>{data.item}</Text>;
  };

  return (
    <CustomSwipePopup onHide={props.onHide}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </CustomSwipePopup>
  );
};

export default ReportSwipeUp;
