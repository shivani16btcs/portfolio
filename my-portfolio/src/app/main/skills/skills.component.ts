import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public skills=[{name:'JavaScript', rate:'good'},
  {name:'Angular', rate:'good'},
  {name:'NodeJs', rate:'good'},
  {name:'C/C++', rate:'good'},
{name:'java',rate:'beginner'}];

}
