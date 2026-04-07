import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomTextInput } from '../components/CustomTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNav';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { loginUser } from '../redux/slices/authSlice';
import { saveAuthData } from '../utils/storage';

type LoginScreenProps = StackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await dispatch(loginUser({ email, password })).unwrap();
      if (res.success == true) {
        await saveAuthData(res.data.token, res.data.user.usr_fname);
        await navigation.navigate('BottomTabs');
      } else {
        setError(res.message || 'Something went wrong');
      }
    } catch (e: any) {
      setError(e?.response?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.title}>Pliē</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <CustomTextInput
          label="Email"
          placeholder="email@email.com"
          containerStyle={{ marginBottom: 15 }}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <CustomTextInput
          label="Password"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Text style={styles.forgotPwdText}>Forgot Password?</Text>
        {error && (
          <Text style={{ color: 'red' }} numberOfLines={1} ellipsizeMode="tail">
            {error}
          </Text>
        )}
        <Pressable
          style={[
            styles.signInBtn,
            {
              backgroundColor:
                email == '' || password == '' ? '#ccc' : '#21d393',
            },
          ]}
          onPress={handleLogin}
          disabled={email == '' || password == ''}
        >
          {loading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={styles.signInBtnText}>Sign In</Text>
          )}
        </Pressable>
        <Text style={styles.signUpText}>
          Not a member? <Text style={styles.signUpSubtext}>Sign Up Here</Text>
        </Text>
        <View style={styles.dividerContainer}>
          <View style={styles.line} />

          <Text style={styles.text}>or Sign In with:</Text>

          <View style={styles.line} />
        </View>
        <View style={styles.socialContainer}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../../assets/apple.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../../assets/fb.png')}
            style={styles.socialIcon}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 38,
    backgroundColor: '#fff',
  },
  titleContainer: {
    backgroundColor: '#ccc',
    height: '40%',
  },
  title: {
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
  },
  forgotPwdText: {
    color: '#828282',
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  signInBtn: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginTop: 27,
    width: 100,
  },
  signInBtnText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    textAlign: 'right',
    marginTop: 15,
    fontSize: 12,
    fontWeight: '400',
  },
  signUpSubtext: {
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 60,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  text: {
    marginHorizontal: 10,
    color: '#555',
    fontSize: 14,
  },
  socialIcon: {
    width: 44,
    height: 44,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16, // or use marginHorizontal if gap not supported
    marginTop: 16,
  },
});
