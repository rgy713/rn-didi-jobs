import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import CustomSwipePopup from '../../../components/custom/CustomSwipePopup';
import useStyles from './styles';

interface Props {
  onHide: () => void;
}

const equipments = [
  'Hammer',
  'Multi-head Screwdriver',
  'Power Screwdriver',
  'Stanley Knife',
  'Combination Pliers',
  'Wrench',
];

const JobEquipmentSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderItem = (data: {item: string}) => {
    return <Text style={styles.equipmentListItem}>{data.item}</Text>;
  };

  return (
    <CustomSwipePopup onHide={props.onHide}>
      <FlatList
        data={equipments}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </CustomSwipePopup>
  );
};

export default JobEquipmentSwipeUp;
