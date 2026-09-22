import { Component, ComponentRef, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-habit-list-item',
  imports: [],
  templateUrl: './habit-list-item.component.html',
  styleUrl: './habit-list-item.component.css'
})
export class HabitListItemComponent {
  @Input() selfRef!: ComponentRef<HabitListItemComponent>;
  @ViewChild('streakCheck') check!: ElementRef<HTMLInputElement>;
  habit: string = "Habit";
  goal: string = "goal";
  streak: number = 0;

  deleteSelf() {
    this.selfRef.destroy();
  }

  addToStreak(){
    if(this.check.nativeElement.checked){
      this.streak = this.streak + 1;
    }else {
      this.streak = this.streak - 1;
    }
  }
}
