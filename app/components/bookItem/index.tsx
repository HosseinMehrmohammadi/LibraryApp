import { GestureResponderEvent, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/colors";
import { styles } from "./styles";
import CustomButton from "../customButton";

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
          <CustomButton 
            ButtonTitle= "Uncheck"
            OnPress={props.OnPressUpdate}
            Color={colors.green}
          />
          }
          {!props.CheckedOut && 
          <CustomButton 
            ButtonTitle= "Check"
            OnPress={props.OnPressUpdate}
            Color={colors.green}
          />
          }
          <CustomButton 
            ButtonTitle= "Delete"
            OnPress={props.OnPressDelete}
            Color={colors.red}
          />
        </View>
      </TouchableOpacity>
  );
};

export default BookItem;