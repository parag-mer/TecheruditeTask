import { Feather, FeatherIconName } from '@react-native-vector-icons/feather';
import { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

type props = TextInputProps & {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const CustomTextInput = ({
  label,
  containerStyle,
  secureTextEntry,
  ...rest
}: props) => {
  const [textVisible, setTextVisible] = useState(false);
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#828282'}
          secureTextEntry={secureTextEntry ? !textVisible : false}
          {...rest}
        />

        {secureTextEntry && (
          <Feather
            name={textVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#828282"
            style={styles.icon}
            onPress={() => setTextVisible(prev => !prev)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },

  inputContainer: {
    justifyContent: 'center',
  },

  textInput: {
    padding: 12,
    paddingRight: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // Android Shadow
    elevation: 5,
  },

  icon: {
    position: 'absolute',
    right: 12,
  },
});
