import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';
@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.css']
})
export class TeammembersComponent implements OnInit {
  members = Team;
  constructor() { }
  ngOnInit(): void {
  }

}
