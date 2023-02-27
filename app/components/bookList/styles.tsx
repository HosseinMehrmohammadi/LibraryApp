import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width:'92%',
  },
  
  bookListContainer: {
    display: 'flex',
    marginTop: 20,
    alignSelf: 'center',
    width: '100%',
  },

  loader: {
    width: 50,
    height: 50
  }
});

export default styles;