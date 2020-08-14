import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: Platform.OS === 'ios' ? 60 : 0,

    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    maxWidth: 160,

    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,

    lineHeight: 32,

    marginVertical: 40,
  },

  header: {
    flexDirection: 'row',
    
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default styles;
