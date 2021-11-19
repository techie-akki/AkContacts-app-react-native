import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: '500',
  },
  form: {
    paddingTop: 10,
  },
  createSection: {
    flexDirection: 'row',
  },
  infoText: {
    fontSize: 18,
  },
  linkBtn: {
    paddingLeft: 10,
    color: colors.primary,
    fontSize: 17,
  },
});
