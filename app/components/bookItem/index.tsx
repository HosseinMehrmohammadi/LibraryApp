import { GestureResponderEvent, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/colors";
import { styles } from "./styles";


type Props = {
  OnPressDelete: (event: GestureResponderEvent) => void | undefined;
  Title: string;
  Author: string;
  YearPublished: number;
  Genre: string;
};

const BookItem: React.FC<Props> = (props: Props): JSX.Element => {

  return (
      <TouchableOpacity
        style={styles.bookContainer}
        activeOpacity={0.5}>
        <View style={styles.titleContainer}>
          <Text style={{color: colors.black, fontSize: 14}}>{props.Title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{color: colors.black, fontSize: 12}}>author: {props.Author}</Text>
          <Text style={{color: colors.lightGray, fontSize: 10, alignSelf: 'center'}}>{props.Genre}, {props.YearPublished}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default BookItem;