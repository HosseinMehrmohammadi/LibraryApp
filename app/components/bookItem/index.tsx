import { Button, GestureResponderEvent, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/colors";
import { styles } from "./styles";

type Props = {
  OnPressDelete: (event: GestureResponderEvent) => void | undefined;
  OnPressUpdate: (event: GestureResponderEvent) => void | undefined;
  Title: string;
  Author: string;
  YearPublished: number;
  Genre: string;
  CheckedOut: boolean;
};

const BookItem: React.FC<Props> = (props: Props): JSX.Element => {

  return (
      <TouchableOpacity
        style={styles.bookContainer}
        activeOpacity={0.5}>
        <View style={styles.bookInfoContainer}>
          <View style={styles.titleContainer}>
            <Text style={{color: colors.black, fontSize: 14}}>{props.Title}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={{color: colors.black, fontSize: 12, maxWidth: '60%'}}>author: {props.Author}</Text>
            <Text style={{color: colors.lightGray, fontSize: 10, alignSelf: 'center'}}>{props.Genre}, {props.YearPublished}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {props.CheckedOut && 
          <Pressable style={{...styles.button, backgroundColor: colors.green}} onPress={props.OnPressDelete}>
            <Text style={{color: colors.white, fontSize: 10}}>Uncheck</Text>
          </Pressable>
          }
          {!props.CheckedOut && 
          <Pressable style={{...styles.button, backgroundColor: colors.green}} onPress={props.OnPressDelete}>
            <Text style={{color: colors.white, fontSize: 10}}>Check</Text>
          </Pressable>
          }
          <Pressable style={{...styles.button, backgroundColor: colors.red}} onPress={props.OnPressDelete}>
            <Text style={{color: colors.white, fontSize: 10}}>Delete</Text>
          </Pressable>
        </View>
      </TouchableOpacity>
  );
};

export default BookItem;