import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public navItem=[{name:'Home', link:'#home'},
                {name:'About', link:'#about'},
                {name:'Skills', link:'#skills'},
                {name:'Work', link:'#work'},
                {name:'Contact', link:'#contact'}];

}
