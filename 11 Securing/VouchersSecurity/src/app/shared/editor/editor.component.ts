import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  // https://github.com/HstarComponents/ngx-ckeditor
  // https://docs.ckeditor.com/

  constructor() { }

  public editorValue: string = '';

  ngOnInit() {
    
  }

}
