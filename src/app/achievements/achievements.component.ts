import { Component, OnInit } from '@angular/core';
import { Achievements } from  '../achievements';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievements = Achievements;
  
  constructor() { }

  ngOnInit(): void {
  }

}
