import { Component } from '@angular/core';
import { Photography } from "./photography/photography";
import { GraphicDesign } from "./graphic-design/graphic-design";
@Component({
  selector: 'app-hobbies',
  imports: [Photography, GraphicDesign],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss'
})
export class Hobbies {

}
