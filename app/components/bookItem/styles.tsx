import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import common from "../../../assets/common";

export const styles = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
    justifyContent: "space-between"
  },

  button: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    justifyContent: 'space-between'
  },

  bookInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'space-between',
    padding: 10
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