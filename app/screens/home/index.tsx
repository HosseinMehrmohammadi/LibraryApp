import React, { useState } from 'react';
import BookList from '../../components/bookList';
import { View } from 'react-native';
import CustomButton from '../../components/customButton';
import Dialog from "react-native-dialog";
import colors from '../../../assets/colors';
import styles from './styles';

const Home: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const onPressCancel = () => {
        setVisible(false);
    };

    const onPressAdd = () => {
        
        setVisible(false);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        ButtonTitle='Add Book'
                        Color= {colors.gold}
                        OnPress={showDialog}
                    />
                </View>
                <BookList />
            </View>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Add Book</Dialog.Title>
                    <Dialog.Description>
                        Please enter the book information.
                    </Dialog.Description>
                    <Dialog.Button onPress={onPressCancel} label="Cancel" />
                    <Dialog.Button onPress={onPressAdd} label="Add" />
                </Dialog.Container>
            </View>
        </>
        
    );
}

export default Home;
