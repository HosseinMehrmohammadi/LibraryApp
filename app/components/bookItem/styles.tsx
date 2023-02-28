import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";


export const styles = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
    justifyContent: "space-between",
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    justifyContent: 'space-between',
  },

  bookInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'space-between',
    padding: 10,
  },

  titleContainer: {
    display: 'flex',
    height: 20
  },

  infoContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20
  },

  titleText: {
    color: colors.textBlack,
    fontSize: 14,
  },

  authorText: {
    color: colors.textBlack,
    fontSize: 12,
    maxWidth: '60%'
  },

  genreText: {
    color: colors.lightGray, 
    fontSize: 10, 
    alignSelf: 'center'
  }
});