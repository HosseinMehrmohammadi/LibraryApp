import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View} from 'react-native';
import styles from './styles'
import { RootState } from '../../redux/store';
import { getBooks, deleteBook, updateBook } from '../../redux/bookListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import BookItem from '../bookItem';
import { Book } from '../../models/book';
import { UpdateBook } from '../../models/book';

const BookList: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const screenState = useAppSelector((state: RootState) => state.bookList);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => { 
    dispatch(getBooks());
  }, [dispatch])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getBooks());
    setRefreshing(false);
  }, [dispatch]);

  const onDelete = (id: string) => {
    dispatch(deleteBook({id: id}));
  }

  const onUpdate = (book: UpdateBook) => {
    dispatch(updateBook({updateBook: book}));
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
      {screenState.error && <Text>There's something wrong!!!</Text>}
      {screenState.loading && <Text>Loading...!!!</Text>}
      {!screenState.error && !screenState.loading && 
        <View style={styles.bookListContainer}>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            data={screenState.books}
            renderItem={renderBookItem}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
          />
        </View>
      }
    </View>
  );
};

export default BookList;