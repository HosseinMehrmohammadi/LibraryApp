import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './app/components/bookList';
import { Provider } from 'react-redux';
import store from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <BookList />
        {/* <StatusBar style="auto" /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
