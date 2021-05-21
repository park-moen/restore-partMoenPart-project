import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F7',
  },
  upperContainer: {
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  titleContainer: {
    marginVertical: 32,
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 54.63,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 14,
  },
  lowerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  menuText: {},
});

export default styles;
