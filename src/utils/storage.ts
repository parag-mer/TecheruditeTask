import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'USER_TOKEN';
const USER_KEY = 'USER_DATA';

export const saveAuthData = async (token: string, user: any) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.log('Error saving auth data', e);
  }
};

export const getAuthData = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const user = await AsyncStorage.getItem(USER_KEY);

    return {
      token,
      user: user ? JSON.parse(user) : null,
    };
  } catch (e) {
    console.log('Error getting auth data', e);
    return { token: null, user: null };
  }
};

export const clearAuthData = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.removeItem(USER_KEY);
};
