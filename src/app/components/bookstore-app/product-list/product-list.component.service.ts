import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';
import { Action } from 'rxjs/internal/scheduler/Action';
import { IBook } from './model/i-book';

@Injectable()
export class BookService{
    private url = 'http://localhost:21262/';  // URL to web api

    httpOptions={
        Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor (private http : HttpClient) { }

    getBook(){
        return this.http.get(this.url)
    }
    
}