import AsyncStorage from '@react-native-community/async-storage';

const setInAsyncStorage = (key: string, item: any) => {
  AsyncStorage.setItem(key, JSON.stringify(item));
};

const getFromAsyncStorage = async (key: string) => {
  const item: any = await AsyncStorage.getItem(key);
  return item && JSON.parse(item);
};

export {setInAsyncStorage, getFromAsyncStorage};
