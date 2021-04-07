import { Observable, SubscriptionLike } from 'rxjs';
import { DashboardService } from './../dashboard-service/dashboard-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDo } from '../../../toDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  toDoItems$: Observable<ToDo[]>;
  checked = false;
  todo: Array<any>;
  subscriptions: SubscriptionLike;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.subscriptions = this.dashboardService.getItems()
    .subscribe((itemObservable: Observable<ToDo[]>) => {
      this.toDoItems$ = itemObservable;
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions){
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
  }

}
