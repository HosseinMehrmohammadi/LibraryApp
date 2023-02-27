export type Book = {
  title: string;
  author: string;
  id: string;
  genre: string;
  yearPublished: number;
  checkedOut: boolean;
  createdAt: string;
};

export type AddBook = {
  title: string;
  author: string;
  genre: string;
  yearPublished: number;
};
  
export type UpdateBook = {
  id: string;
  checkedOut: boolean;
};
