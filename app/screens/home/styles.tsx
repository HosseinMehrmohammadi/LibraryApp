import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column'
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    Width: '30%'
  }
});

export default styles;