import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.scss'
})
export class Switch {
  themeToggle: EventEmitter<boolean> = new EventEmitter();

  toggleDarkMode(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  const htmlEl = document.documentElement;

  if (checkbox.checked) {
    htmlEl.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    console.log("set to light");

  
  } else {
     htmlEl.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    console.log("set to dark");
  }
}

// On app init, check saved theme
  ngOnInit() {
const theme = localStorage.getItem('theme');
  const htmlEl = document.documentElement;
  const checkbox = document.getElementById('themeToggle') as HTMLInputElement;

  if (theme === 'dark') {
    htmlEl.classList.add('dark-mode');
    if (checkbox) checkbox.checked = false;
  } else {
    htmlEl.classList.remove('dark-mode');
    if (checkbox) checkbox.checked = true;
  }
}
}
