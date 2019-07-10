import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => {
        this.orders = orders['body'];
      });
  }

}
