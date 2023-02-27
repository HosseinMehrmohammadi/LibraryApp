import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import common from "../../../assets/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width:'92%',
    // height: '80%'
  },
  
  bookListContainer: {
    display: 'flex',
    marginTop: 40,
    alignSelf: 'center',
    width: '100%',
    // height: '100%'
  }
});

export default styles;