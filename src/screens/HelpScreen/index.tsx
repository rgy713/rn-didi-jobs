import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AngleDownIcon from '../../assets/icons/AngleDownIcon';
import AngleRightIcon from '../../assets/icons/AngleRightIcon';
import CustomSearchTextInput from '../../components/custom/CustomSearchTextInput';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type HelpNavProp = StackNavigationProp<RootStackParamList, 'HelpScreen'>;

type HelpDataType = {
  question: string;
  answer: string;
};

const helpData = [
  {
    question: 'this is the first question',
    answer: 'We need to do this so that we can provide security for our users',
  },
  {
    question: 'this is the second question',
    answer: 'We need to do this so that we can provide security for our users',
  },
  {
    question: 'this is the third question',
    answer: 'We need to do this so that we can provide security for our users',
  },
  {
    question: 'this is the third question',
    answer: 'We need to do this so that we can provide security for our users',
  },
  {
    question: 'this is the third question',
    answer: 'We need to do this so that we can provide security for our users',
  },
  {
    question: 'this is the third question',
    answer: 'We need to do this so that we can provide security for our users',
  },
  {
    question: 'this is the third question',
    answer: 'We need to do this so that we can provide security for our users',
  },
];

const HelpScreen = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<HelpNavProp>();
  const searchRef: MutableRefObject<TextInput | null | undefined> = useRef();

  const [search, setSearch] = useState<string>('');
  const [helpList, setHelpList] = useState<HelpDataType[]>([]);

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const addHelpData = () => {
    let data = helpData.filter(
      item => !search || item.question.indexOf(search) > -1,
    );
    setHelpList(data);
  };

  useEffect(() => {
    addHelpData();
  }, []);

  const ListItem = (props: any) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
      <View>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => setExpanded(!expanded)}>
          <Text style={styles.itemText}>{props.item.question}</Text>
          {expanded ? <AngleDownIcon /> : <AngleRightIcon />}
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text>{props.item.answer}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      headerContainerStyle={styles.headerContainerStyle}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.containers}>
        <Text style={styles.headingText}>{strings.Help}</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contact}>{strings.ContactSupport}: </Text>
          <Text style={styles.contactNumber}>123-123-1234</Text>
        </View>
        <Text style={styles.secondHeadingStyle}>{strings.HelpScreenText}</Text>
        <CustomSearchTextInput
          autoFocus={false}
          inputStyle={styles.inputStyle}
          inputContainer={styles.inputContainer}
          placeholder={strings.Search}
          handleChange={setSearch}
          value={search}
          fieldRef={searchRef}
          blurOnSubmit={true}
          returnKeyType={'done'}
          onSubmitEditing={addHelpData}          
        />

        <FlatList
          data={helpList}
          renderItem={({item, index}) => <ListItem item={item} theme={theme} />}
          style={styles.listContainer}
        />
      </View>
    </ScreenWrapperContainer>
  );
};

export default HelpScreen;
