import { Component } from '@angular/core';
import { Book } from 'src/app/book/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books: Book[]
  pageSize= 3;
  currentPage= 1;

  constructor() {
    this.books = [
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      },
      {
        id: 1,
        title: "The C Programming Language",
        author: {
          id: 1,
          name: "Dennis Richie"
        },
        genre: {
          id: 1,
          name: "CS"
        },
        isbn: "iBd13489uyujfnUYH78hfee",
        summary: "This book covers the basic fundamentals of the c programming language",
        imageUrl: "https://fakeimg.pl/200x100"
      }


    ]

  }

  get totalPages(): number {
    return Math.ceil(this.books.length / this.pageSize);
  }

  get pagedAuthors(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.books.slice(startIndex, endIndex);
  }

  prevPage(): void {
    this.currentPage--;
  }

  nextPage(): void {
    this.currentPage++;
  }
}
