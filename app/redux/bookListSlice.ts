import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as bookApi from '../api/bookApi';
import { AddBook, Book, UpdateBook } from "../models/book";

export type BookListState = {
    books: Book[],
    book: Book,
    loading: boolean,
    error: boolean
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
    error: false
}

export const getBooks = createAsyncThunk<{books: Book[]}>(
    'getBooks',
    async () => {
        const response = await bookApi.getBooks();
        if (response.type === 'success') {
            return {
                books: response.body ?? []
            }
        } else {
            throw 'Error getting books'
        }
    },
);

export const getBook = createAsyncThunk<{book: Book}, {id: string}>(
    'getBook',
    async ({id}) => {
        const response = await bookApi.getBook(id);
        if (response.type === 'success') {
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
            throw 'Error getting book'
        }
    },
);

export const addBook = createAsyncThunk<{}, {addBook: AddBook}>(
    'addBook',
    async ({addBook}) => {
        const response = await bookApi.addBook(addBook);
        if (response.type === 'success') {
            return {}
        } else {
            throw 'Error adding book'
        }
    },
);

export const updateBook = createAsyncThunk<{}, {updateBook: UpdateBook}>(
    'updateBook',
    async ({updateBook}) => {
        const response = await bookApi.updateBook(updateBook);
        if (response.type === 'success') {
            return {}
        } else {
            throw 'Error updating book'
        }
    },
);

export const deleteBook = createAsyncThunk<{} ,{id: string}>(
    'deleteBook',
    async ({id}) => {
        const response = await bookApi.deleteBook(id);
        if (response.type === 'success') {
            return {}
        } else {
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
        .addCase(getBooks.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getBooks.fulfilled, (state, action) => {
            state.books = action.payload.books;
            state.loading = false;
            state.error = false;
        })
        .addCase(getBooks.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(getBook.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getBook.fulfilled, (state, action) => {
            state.book = action.payload.book;
            state.loading = false;
            state.error = false;
        })
        .addCase(getBook.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(addBook.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(addBook.fulfilled, (state) => {
            state.loading = false;
            state.error = false;
        })
        .addCase(addBook.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(updateBook.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(updateBook.fulfilled, (state) => {
            state.loading = false;
            state.error = false;
        })
        .addCase(updateBook.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        .addCase(deleteBook.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(deleteBook.fulfilled, (state) => {
            state.loading = false;
            state.error = false;
        })
        .addCase(deleteBook.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    },
})

export default bookListSlice.reducer;