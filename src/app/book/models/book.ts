import { Author } from "../../author/models/author"
import { Genre } from "./genre"

export interface Book {
    id:number
    title:string
    isbn:string
    author:Author
    genre:Genre
    summary:string
    imageUrl:string

}

