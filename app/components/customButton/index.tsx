import React from 'react'
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { styles } from './styles';
import colors from '../../../assets/colors';

type Props = {
    OnPress: (event: GestureResponderEvent) => void | undefined;
    ButtonTitle: string;
    Color: string;
};

const CustomButton: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <Pressable style={{...styles.button, backgroundColor: props.Color}} onPress={props.OnPress}>
            <Text style={{color: colors.white, fontSize: 10}}>{props.ButtonTitle}</Text>
        </Pressable>
    );
}

export default CustomButton;