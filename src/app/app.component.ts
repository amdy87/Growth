import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitListItemComponent } from "./habit-list-item/habit-list-item.component";
import { AddHabitComponent } from './add-habit/add-habit.component';
import { InspirationalQuoteComponent } from './inspirational-quote/inspirational-quote.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitListItemComponent, AddHabitComponent, InspirationalQuoteComponent, ProfileBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Growth';
  @ViewChild('container', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  widgetVisible = false;
  @ViewChild('goalName') goalNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('habitName') habitName!: ElementRef<HTMLInputElement>;

  showHabitWidget() {
    this.widgetVisible = true;
  }

  hideHabitWidget() {
    this.widgetVisible = false;
    this.goalNameInput.nativeElement.value = "";
    this.habitName.nativeElement.value = "";
  }

  createHabitComponent(habit: string, goal: string){
    const cmpRef = this.vcr.createComponent(HabitListItemComponent);
    cmpRef.instance.selfRef = cmpRef;
    if(goal.localeCompare("") == 0){
      cmpRef.instance.goal = "Goal";
    }else {
      cmpRef.instance.goal = goal;
    }

    if(habit.localeCompare("") == 0){
      cmpRef.instance.habit = "Habit";
    }else {
      cmpRef.instance.habit = habit;
    }
    this.hideHabitWidget();
    
  }
}
