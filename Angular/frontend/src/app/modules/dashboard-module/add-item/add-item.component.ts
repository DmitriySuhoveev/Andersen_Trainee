import { SubscriptionLike } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from './../dashboard-service/dashboard-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit, OnDestroy {

  addTodoForm: FormGroup;
  subscriptions: SubscriptionLike;

  constructor(private dashboardService: DashboardService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
  }

  initForm(): void {
    this.addTodoForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  addTodo(): void {
    this.subscriptions = this.dashboardService.addItem(this.addTodoForm.value)
    .subscribe(() => this.dashboardService.setItems());
  }

}
