import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
  employee = { id: 1, name: 'Rahim Uddin', department: 'IT' }

}
