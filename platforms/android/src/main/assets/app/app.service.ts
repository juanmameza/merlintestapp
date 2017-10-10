import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import {RootObject, Child} from "./app.interfaces"

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class AppService {

  private URL = "https://www.reddit.com/reddits.json";

  constructor(private http: Http) { } 

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.URL, { headers: headers })
            .map(res => res.json() as RootObject);
    }

    getResponseInfo() {
        let headers = this.createRequestHeader();
        return this.http.get(this.URL, { headers: headers })
            .do(res => res);
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.append("Content-Type", "application/json");

        return headers;
}
}