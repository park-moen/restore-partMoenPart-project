import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingHorizontal: 18,
  },
  transitionPressable: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderColor: 'rgb(32, 122, 180)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 200,
    height: 59,
    marginTop: 96,
  },
  explanation: {
    fontSize: 14,
    marginTop: 16,
  },
  checkIcon: { position: 'absolute', top: 265, right: 20 },
  middleContainer: {
    position: 'absolute',
    top: 300,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailInput: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    fontSize: 16,
    marginTop: 80,
    borderBottomColor: '#c1c2c3',
  },
  button: {},
  buttonText: {
    fontSize: 18,
    color: 'rgb(32,122,180)',
  },
  checkBoxText: {
    fontSize: 11,
    color: '#c1c2c3',
  },
  socialLoginContainer: {
    marginTop: 70,
    borderColor: '#c1c2c3',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLoginText: {
    marginTop: 70,
    borderColor: '#c1c2c3',
    borderTopWidth: 1,
    position: 'absolute',
    top: -80,
    left: 155,
    textAlign: 'center',
    width: 80,
    backgroundColor: '#fefefe',
    color: '#c1c2c3',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 12,
  },
  iconText: { color: '#202020' },
  underlineText: {
    marginTop: 46,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  guideTextValid: { marginTop: 3, color: '#38D1A8', height: 15 },
  guideTextInvalid: { marginTop: 3, color: '#E93A55', height: 15 },
});

export default styles;
