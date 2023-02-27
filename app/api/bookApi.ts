import { AddBook, Book, UpdateBook } from "../models/book";
import { NetworkResponse } from "../models/response";

export const getBooks = async (): Promise<NetworkResponse<Book[]>> => {
    const response = await fetch(
        `https://postman-library-api.glitch.me/books`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    );

    if (response.ok) {
        const json = await response.json()
        return {
            type: 'success',
            body: json
        }
    } else {
        return {
            type: 'failure'
        }
    }
}

export const getBook = async (id: string): Promise<NetworkResponse<Book>> => {
    const response = await fetch(
        `https://postman-library-api.glitch.me/books/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    );

    if (response.ok) {
        const json = await response.json()
        return {
            type: 'success',
            body: json.results
        }
    } else {
        return {
            type: 'failure'
        }
    }
}

export const addBook = async (book: AddBook): Promise<NetworkResponse<undefined>> => {
    const response = await fetch(
        `https://postman-library-api.glitch.me/books`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": book.title,
                "author": book.author,
                "genre": book.genre,
                "yearPublished": book.yearPublished
            }),
        },
    );

    if (response.ok) {        
        return {
            type: 'success',
        }
    } else {
        return {
            type: 'failure',
        }
    }
}

export const updateBook = async (book: UpdateBook): Promise<NetworkResponse<Book>> => {
    const check = !(book.checkedOut);

    const response = await fetch(
        `https://postman-library-api.glitch.me/books/${book.id}`,
        {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "checkedOut": check,
            }),
        },
    );

    if (response.ok) {
        return {
            type: 'success',
        }
    } else {
        return {
            type: 'failure',
        }
    }
}

export const deleteBook = async (id: string): Promise<NetworkResponse<Book>> => {
    const response = await fetch(
        `https://postman-library-api.glitch.me/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    );

    if (response.ok) {
        return {
            type: 'success',
        }
    } else {
        return {
            type: 'failure',
        }
    }
}
