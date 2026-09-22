import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
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

  createHabitComponent(){
    const cmpRef = this.vcr.createComponent(HabitListItemComponent);
    cmpRef.instance.selfRef = cmpRef;
  }
}
