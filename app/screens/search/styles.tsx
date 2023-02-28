import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  bookListContainer: {
    display: 'flex',
    marginTop: 20,
    alignSelf: 'center',
    width: '100%',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },

  loader: {
    width: 50,
    height: 50
  }
});

export default styles;