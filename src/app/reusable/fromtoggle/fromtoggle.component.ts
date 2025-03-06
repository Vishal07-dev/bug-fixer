import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-fromtoggle',
  imports: [NgClass],
  templateUrl: './fromtoggle.component.html',
  styleUrl: './fromtoggle.component.css'
})
export class FromtoggleComponent {
  @Input() togglevalue:string[]=[]
  @Output() togglebutton=new EventEmitter<string>();
  currantvalue:string='Login'
  OnclickGetFromValue(tabname:string)
  {
    this.currantvalue=tabname
    this.togglebutton.emit(tabname)
    console.log(tabname);
    
  }
}
