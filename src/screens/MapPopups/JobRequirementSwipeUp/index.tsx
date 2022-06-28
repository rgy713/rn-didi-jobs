import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import CustomSwipePopup from '../../../components/custom/CustomSwipePopup';
import useStyles from './styles';

interface Props {
  onHide: () => void;
}

const requirements = ['Assemble 2 items', 'Table and Chair', 'No instructions'];

const JobRequirementSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderItem = (data: {item: string}) => {
    return <Text style={styles.requirementText}>{data.item}</Text>;
  };

  return (
    <CustomSwipePopup onHide={props.onHide}>
      <FlatList
        data={requirements}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
      <View style={styles.requirementImagesContainer}>
        <Image
          source={require('../../../assets/images/Profile.png')}
          style={styles.requirementImage}
        />
        <Image
          source={require('../../../assets/images/Profile.png')}
          style={styles.requirementImage}
        />
        <Image
          source={require('../../../assets/images/Profile.png')}
          style={styles.requirementImage}
        />
      </View>
      <View style={styles.requirementTextContainerStyle}>
        <Text style={styles.requirementTextStyle}>
          {
            'My chair and table just arrived and I don’t know how to assemble them, they are both IKEA brand and I threw away the directions to the chair, I need someone that knows how to do this. Should be pretty easy if you have the experience.'
          }
        </Text>
      </View>
    </CustomSwipePopup>
  );
};

export default JobRequirementSwipeUp;
