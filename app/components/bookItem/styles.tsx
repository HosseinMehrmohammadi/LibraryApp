import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import common from "../../../assets/common";

export const styles = StyleSheet.create({
  bookContainer: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
  },

  titleContainer: {
    display: 'flex',
  },

  infoContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});