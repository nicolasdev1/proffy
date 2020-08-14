import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#8257e5',

    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 180,

    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,

    lineHeight: 37,
  },

  description: {
    maxWidth: 240,

    marginTop: 24,
    
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,

    lineHeight: 26
  },

  okButton: {
    height: 58,

    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 15,

    backgroundColor: '#04d361',

    borderRadius: 8,
  },

  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;
