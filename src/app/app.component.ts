import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitListItemComponent } from "./habit-list-item/habit-list-item.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Growth';
}
