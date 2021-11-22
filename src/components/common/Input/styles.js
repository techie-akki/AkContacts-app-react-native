import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  label: {
    fontSize: 18,
  },
  wrapper: {
    height: 42,
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 14,
  },
});
