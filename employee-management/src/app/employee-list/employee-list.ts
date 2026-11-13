import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { EmployeeCard } from '../employee-card/employee-card';

@Component({
  selector: 'app-employee-list',
  imports: [ FormsModule,  EmployeeCard],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  title = 'Employee List';
  companyName = 'SpaceTell';
  employeeCount = 5;

  isActive = true;

  flip() {
    this.isActive = !this.isActive;
  }

  searchText = '';

  employees = [
  { id: 1, name: 'Samiul', department: 'Engineering' },
  { id: 2, name: 'Rahim',  department: 'HR' },
];
}