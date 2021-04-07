import { ToDo } from './../../../toDo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    private toDoItemSubject$: BehaviorSubject<Observable<ToDo[]>> = new BehaviorSubject(this.getItem());
    constructor(private http: HttpClient){}

    getItems(): any {
        return this.toDoItemSubject$.asObservable();
    }

    setItems(): void {
        this.toDoItemSubject$.next(this.getItem());
    }

    addItem(todo: ToDo): Observable<any> {
        return this.http.post(`${config.baseUrl}/tasks`, todo);
    }

    getItem(): Observable<any> {
        return this.http.get(`${config.baseUrl}/tasks`);
    }

}

