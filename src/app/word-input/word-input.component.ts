import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit {

  simpleWord: string = "";
  constructor() { }

  ngOnInit() {
  }

}
