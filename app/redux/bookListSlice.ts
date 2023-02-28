import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as bookApi from '../api/bookApi';
import { AddBook, Book, UpdateBook } from "../models/book";
import { ToastAndroid } from 'react-native';

export type BookListState = {
    books: Book[],
    book: Book,
    loading: boolean,
    error: boolean,
}

const initialState: BookListState = {
    books: [],
    book: {
        title: '',
        author: '',
        createdAt: '',
        yearPublished: 0,
        id: '',
        checkedOut: false,
        genre: ''
    },
    loading: false,
    error: false,
}

export const getBooksAsync = createAsyncThunk<{books: Book[]}>(
    'getBooks',
    async () => {
        const response = await bookApi.getBooks();
        if (response.type === 'success') {
            ToastAndroid.showWithGravity('! Getting Books Succeeded !', 4, ToastAndroid.BOTTOM);
            return {
                books: response.body ?? []
            }
        } else {
            ToastAndroid.showWithGravity('! Getting Books Failed !', 4, ToastAndroid.BOTTOM);
            throw 'Error getting books'
        }
    },
);

export const getBookAsync = createAsyncThunk<{book: Book}, {id: string}>(
    'getBook',
    async ({id}) => {
        const response = await bookApi.getBook(id);
        if (response.type === 'success') {
            ToastAndroid.showWithGravity('! Getting Book Succeeded !', 4, ToastAndroid.BOTTOM);
            return {
                book: response.body ?? {
                    title: '',
                    author: '',
                    createdAt: '',
                    yearPublished: 0,
                    id: '',
                    checkedOut: false,
                    genre: ''
                },
            }
        } else {
            ToastAndroid.showWithGravity('! Getting Book Failed !', 4, ToastAndroid.BOTTOM);
            throw 'Error getting book'
        }
    },
);

export const addBookAsync = createAsyncThunk<{}, {addBook: AddBook}>(
    'addBook',
    async ({addBook}) => {
        const response = await bookApi.addBook(addBook);
        if (response.type === 'success') {
            ToastAndroid.showWithGravity('! Adding Book Succeeded !', 4, ToastAndroid.BOTTOM);
            return {}
        } else {
            ToastAndroid.showWithGravity('! Adding Book Failed !', 4, ToastAndroid.BOTTOM);
            throw 'Error adding book'
        }
    },
);

export const updateBookAsync = createAsyncThunk<{bookId: string}, {updateBook: UpdateBook}>(
    'updateBook',
    async ({updateBook}) => {
        const response = await bookApi.updateBook(updateBook);
        if (response.type === 'success') {
            ToastAndroid.showWithGravity('! Updating Book Succeeded !', 4, ToastAndroid.BOTTOM);
            return {bookId: response.body ?? ''}
        } else {
            ToastAndroid.showWithGravity('! Updating Book Failed !', 4, ToastAndroid.BOTTOM);
            throw 'Error updating book'
        }
    },
);

export const deleteBookAsync = createAsyncThunk<{bookId: string} ,{id: string}>(
    'deleteBook',
    async ({id}) => {
        const response = await bookApi.deleteBook(id);
        if (response.type === 'success') {
            ToastAndroid.showWithGravity('! Deleting Book Succeeded !', 4, ToastAndroid.BOTTOM);
            return {bookId: response.body ?? ''}
        } else {
            ToastAndroid.showWithGravity('! Deleting Book Failed !', 4, ToastAndroid.BOTTOM);
            throw 'Error deleting book'
        }
    },
);

const bookListSlice = createSlice({
    name: 'bookList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBooksAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getBooksAsync.fulfilled, (state, action) => {
            state.books = action.payload.books;
            state.loading = false;
            state.error = false;
        })
        .addCase(getBooksAsync.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(getBookAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getBookAsync.fulfilled, (state, action) => {
            state.book = action.payload.book;
            state.loading = false;
            state.error = false;
        })
        .addCase(getBookAsync.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(addBookAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(addBookAsync.fulfilled, (state) => {
            state.loading = false;
            state.error = false;
        })
        .addCase(addBookAsync.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(updateBookAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(updateBookAsync.fulfilled, (state, action) => {
            state.books.forEach((element) => {
                if (element.id == action.payload.bookId) {
                    element.checkedOut = !(element.checkedOut);
                }
            });
            state.loading = false;
            state.error = false;
        })
        .addCase(updateBookAsync.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(deleteBookAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(deleteBookAsync.fulfilled, (state, action) => {
            state.books.forEach((element) => {
                if (element.id == action.payload.bookId) {
                    let temp = state.books.indexOf(element);
                    state.books.splice(temp, 1);
                }
            });
            state.loading = false;
            state.error = false;
        })
        .addCase(deleteBookAsync.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    },
})

export default bookListSlice.reducer;