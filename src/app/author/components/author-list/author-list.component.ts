import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})



export class AuthorListComponent {
//pages: any;
  authors: Author[]
  // pageSize=6;
  // currentPage=1;

   pageSize= 3;
  currentPage= 1;
  //totalPages = 0;
  //pagedAuthors: Author[] ;// initialize the total number of pages

/*
  get getPages(): number {
    return Math.ceil(this.authors.length / this.pageSize);
  } */
/*
  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  get pagedAuthors(): Author[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.authors.slice(startIndex, startIndex + this.pageSize);
  }  */
  constructor() {
    this.authors = [
      {
        id: 1,
        name: "normmmmmm"

      },
      {
        id: 2,
        name: "nor1"
      },
      {
        id: 3,
        name: "nor22"
      },
      {
        id: 4,
        name: "nor"
      },
      {
        id: 5,
        name: "nor1"
      },
      {
        id: 6,
        name: "nor22"
      },
      {
        id: 6,
        name: "nor"
      },
      {
        id: 7,
        name: "nor1"
      },
      {
        id: 8,
        name: "nor22"
      },
      {
        id: 9,
        name: "nor"
      },
      {
        id: 10,
        name: "nor1"
      },
      {
        id: 13,
        name: "nor22"
      },

      {
        id: 11,
        name: "nor"
      },
      {
        id: 12,
        name: "nor1"
      },
      {
        id: 23,
        name: "nor22"
      },
      {
        id: 1,
        name: "nor"
      },
      {
        id: 2,
        name: "nor1"
      },
      {
        id: 3,
        name: "nor22"
      },


      {
        id: 1,
        name: "nor"
      },
      {
        id: 2,
        name: "nor1"
      },
      {
        id: 3,
        name: "nor22"
      },
      {
        id: 1,
        name: "nor"
      },
      {
        id: 2,
        name: "nor1"
      },
      {
        id: 3,
        name: "nor22"
      },
    ]

  }


   get totalPages(): number {
    return Math.ceil(this.authors.length / this.pageSize);
  }

  get pagedAuthors(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.authors.slice(startIndex, endIndex);
  }

  prevPage(): void {
    this.currentPage--;
  }

  nextPage(): void {
    this.currentPage++;
  }




}











