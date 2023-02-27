import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import common from "../../../assets/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: 400
  },
  
  bookListContainer: {
    display: 'flex',
    marginTop: 40,
    width: '95%',
    alignSelf: 'center'
  }
});

export default styles;