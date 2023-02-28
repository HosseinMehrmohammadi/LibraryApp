import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, View} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import { RootState } from '../../redux/store';
import { getBooksAsync, deleteBookAsync, updateBookAsync } from '../../redux/bookListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import BookItem from '../bookItem';
import { Book } from '../../models/book';
import { UpdateBook } from '../../models/book';
import styles from './styles'

const BookList: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const screenState = useAppSelector((state: RootState) => state.bookList);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => { 
    dispatch(getBooksAsync());
  }, [dispatch])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getBooksAsync());
    setRefreshing(false);
  }, [dispatch]);

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
      {!screenState.loading && 
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