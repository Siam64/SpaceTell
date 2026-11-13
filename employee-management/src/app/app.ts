import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav'
import { Sidebar } from './sidebar/sidebar'
import { EmployeeList } from './employee-list/employee-list'
// import { EmployeeCard } from './employee-card/employee-card'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Sidebar, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management');
}
