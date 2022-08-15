import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../model/Book";


@Injectable({
    providedIn: "root"
})
export class BooksService{
    constructor(private http: HttpClient){}
    getBooks(){
        return this.http.get<Book[]>("http://localhost:4200/assets/api/teste.json");
    }
}