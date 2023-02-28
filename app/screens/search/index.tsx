import React, { useCallback, useState } from 'react'
import SearchBar from "react-native-dynamic-search-bar";
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { Book, UpdateBook } from '../../models/book';
import AnimatedLoader from 'react-native-animated-loader';
import { FlatList, RefreshControl, ToastAndroid, View } from 'react-native';
import BookItem from '../../components/bookItem';
import { deleteBookAsync, getBooksAsync, updateBookAsync } from '../../redux/bookListSlice';
import styles from './styles';

const Search: React.FC = () => {

    const dispatch = useAppDispatch();
    const screenState = useAppSelector((state: RootState) => state.bookList);

    const [searchInput, setSearchInput] = useState<string>('');
    const [searchedBooks, setSearchBooks] = useState<Book[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(getBooksAsync());
        setRefreshing(false);
        setSearchInput('');
        setSearchBooks([]);
    }, [dispatch]);

    const onPressSearch = () => {
        setSearchBooks([]);

        if (searchInput == '') {
            ToastAndroid.showWithGravity('Please enter the book name.', 4, ToastAndroid.BOTTOM);
        } else {
            screenState.books.forEach(element => {
                if (element.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
                    setSearchBooks((prev) => [...prev, element]);
                }
            });
        }
    }

    const onPressClear = () => {
        setSearchInput('');
    }

    const onChangeText = (searchText: string) => {
        setSearchInput(searchText);
    }

    const onDelete = (id: string) => {
        dispatch(deleteBookAsync({id: id}));
    }
    
    const onUpdate = (book: UpdateBook) => {
        dispatch(updateBookAsync({updateBook: book}));
    }

    const renderBookItem: any = ({item}: any) => {
        item = item as Book;
        return (
            <BookItem
            OnPressDelete={() => onDelete(item.id)}
            OnPressUpdate={() => onUpdate({id: item.id, checkedOut:item.checkedOut})}
            Title= {item.title}
            Author= {item.author}
            YearPublished= {item.yearPublished}
            Genre= {item.genre}
            CheckedOut= {item.checkedOut}
            />
        );
    }

    return (
        <View style={styles.container}>
            <AnimatedLoader
                visible={screenState.loading}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.loader}
                speed={1}
            />
            <SearchBar
                placeholder='Search...'
                onChangeText={(text) => onChangeText(text)}
                onSearchPress={onPressSearch}
                onClearPress={onPressClear}
            >
                {searchInput}
            </SearchBar>
            
            {!screenState.loading && 
                <View style={styles.bookListContainer}>
                    <FlatList
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    data={searchedBooks}
                    renderItem={renderBookItem}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={10}
                    />
                </View>
            }
        </View>
    );
}

export default Search;