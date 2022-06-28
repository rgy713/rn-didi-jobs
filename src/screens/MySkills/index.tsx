import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomDropdown from '../../components/custom/CustomDropdown';
import {MAP_DRAWER} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type MySkillsNavProps = StackNavigationProp<RootStackParamList, 'MySkills'>;

interface MySkillsProps {
  route: any;
}

const MySkills = (props: MySkillsProps) => {
  const theme = useTheme();
  const navigation = useNavigation<MySkillsNavProps>();
  const styles = useStyles(theme);
  const goBack: string = props.route?.params?.goBack;

  const skillData = [
    {
      name: 'Home Improvement',
      isSubMenuVisible: false,
      subMenu: [
        {
          name: 'Furniture',
          isSubMenuVisible: false,
          subMenu: [
            {name: 'Furniture assembly', check: false},
            {name: 'Furniture disassembly', check: false},
          ],
        },
        {name: 'House cleaning', check: false},
      ],
    },
  ];

  //TODO Fix me
  const [menu, setMenu] = useState<any[]>([]);

  const setMySkillData = () => {
    setMenu(skillData);
  };

  useEffect(() => {
    setMySkillData();
  }, []);

  const handleMenuClick = (keyname: string) => {
    let tempMenu = toggleSubMenuView(keyname, [...menu]);
    const data = tempMenu?.map((i: any) => {
      i?.subMenu?.map((j: any) => {
        j.subMenu?.map((b: any) => {
          if (b.name === keyname) {
            b.check = !b.check;
          }

          return b;
        });
        if (j.name === keyname) {
          j.check = !j.check;
        }
        return j;
      });

      return i;
    });

    setMenu(data);
  };

  const toggleSubMenuView = (keyname: string, tempMenu: any) => {
    for (let index = 0; index < tempMenu.length; index++) {
      if (tempMenu[index].name === keyname) {
        tempMenu[index].isSubMenuVisible = !tempMenu[index].isSubMenuVisible;
        break;
      } else if (
        tempMenu[index].subMenu &&
        tempMenu[index].subMenu.length > 0
      ) {
        tempMenu[index].subMenu = toggleSubMenuView(
          keyname,
          tempMenu[index].subMenu,
        );
      }
    }
    return tempMenu;
  };

  const handleSaveBtnClick = () => {
    // TODO Fix me
    navigation.navigate(MAP_DRAWER);
  };

  const renderListView = useCallback(() => {
    return (
      <ScrollView style={styles.stepsContainer}>
        {menu.map(item => (
          <CustomDropdown
            handleClick={handleMenuClick}
            key={item.name}
            menu={item}
          />
        ))}
      </ScrollView>
    );
  }, [menu]);

  const handleBackBtnPress = () => {
    //TODO Fix me
    navigation.goBack();
  };

  return (
    <ScreenWrapperContainer
      isHeader={goBack ? true : false}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.headingTextCotainer}>
        <Text style={styles.headingText}>{strings.MySkills}</Text>
        <Text style={styles.subHeadingText}>{strings.WhatAreYouGoodAt}</Text>
      </View>
      {renderListView()}
      <View style={styles.btnContainer}>
        <Text style={styles.termsText}>
          {strings.MySkillSaveDesc}
          <Text style={styles.termsTextBlue}> {strings.TermsOfService}</Text>
        </Text>
        <View style={styles.submitBtnWrapper}>
          <CustomButton
            text={strings.Save}
            style={styles.confirmBtn}
            textStyle={styles.confirmBtnText}
            handleClick={handleSaveBtnClick}
          />
        </View>
      </View>
    </ScreenWrapperContainer>
  );
};

export default MySkills;
