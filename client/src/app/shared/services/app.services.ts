import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService{

    constructor(private http: HttpClient){
        
    }

    wikiData(search: {}): Observable<any>{
        // console.log(search)
        return this.http.post<any>('/api/wiki/', search)
    }
    getAllQuestions(){
        return this.http.get<any>('/api/wiki/questions')
    }   
    
}