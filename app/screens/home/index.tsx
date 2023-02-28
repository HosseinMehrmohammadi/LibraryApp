import React, { useState } from 'react';
import BookList from '../../components/bookList';
import { ToastAndroid, View } from 'react-native';
import CustomButton from '../../components/customButton';
import { useAppDispatch } from '../../redux/hook';
import { addBookAsync } from '../../redux/bookListSlice';
import { AddBook } from '../../models/book';
import Dialog from "react-native-dialog";
import colors from '../../../assets/colors';
import styles from './styles';

type HomeProps = {
    title: string;
    author: string;
    yearPublished: string;
    genre: string;
}

const Home: React.FC = ({ navigation }: any) => {
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);
    const [dialogInput, setDialogInput] = useState<HomeProps>({
        title: '',
        author: '',
        yearPublished: '',
        genre: '',
    });

    const showDialog = () => {
        setVisible(true);
    };

    const onPressCancel = () => {
        setVisible(false);
    };

    const onPressAdd = () => {
        if (dialogInput.author == '' || dialogInput.genre == '' || dialogInput.title == '' || dialogInput.yearPublished == '') {
            ToastAndroid.showWithGravity('Please fill in all the fields.', 4, ToastAndroid.BOTTOM);
        } else {
            const book: AddBook = {
                title: dialogInput.title,
                genre: dialogInput.genre,
                yearPublished: parseInt(dialogInput.yearPublished),
                author: dialogInput.author
            }

            if (!Number.isNaN(book.yearPublished)) {
                dispatch(addBookAsync({addBook: book}));
                setDialogInput({
                    title: '',
                    author: '',
                    yearPublished: '',
                    genre: '',
                })
                setVisible(false);
            } else {
                ToastAndroid.showWithGravity('Published date must be a number.', 4, ToastAndroid.BOTTOM);
            }
        }
    };

    const onChangeText = (homeProps: HomeProps) => {
        setDialogInput(homeProps);
    }

    const navigateToSearch = () => {
        navigation.navigate('Search');
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <View style={{width: '30%'}}>
                        <CustomButton
                            ButtonTitle='Search'
                            Color= {colors.gold}
                            OnPress={navigateToSearch}
                        />
                    </View>
                    <View style={{width: '30%'}}>
                        <CustomButton
                            ButtonTitle='Add Book'
                            Color= {colors.gold}
                            OnPress={showDialog}
                        />
                    </View>    
                </View>
                <BookList />
            </View>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Add Book</Dialog.Title>
                    <Dialog.Description>
                        Please enter the book information.
                    </Dialog.Description>
                    <Dialog.Input placeholder='title' onChangeText={(text) => onChangeText({...dialogInput, title: text})}>
                        {dialogInput.title}
                    </Dialog.Input>
                    <Dialog.Input placeholder='author' onChangeText={(text) => onChangeText({...dialogInput, author: text})}>
                        {dialogInput.author}
                    </Dialog.Input>
                    <Dialog.Input placeholder='genre' onChangeText={(text) => onChangeText({...dialogInput, genre: text})}>
                        {dialogInput.genre}
                    </Dialog.Input>
                    <Dialog.Input placeholder='published date (y)' onChangeText={(text) => onChangeText({...dialogInput, yearPublished: text})}>
                        {dialogInput.yearPublished}
                    </Dialog.Input>
                    <Dialog.Button onPress={onPressCancel} label="Cancel" />
                    <Dialog.Button onPress={onPressAdd} label="Add" />
                </Dialog.Container>
            </View>
        </View>
    );
}

export default Home;
