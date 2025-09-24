import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  toggleDarkMode() {
    const htmlEl = document.documentElement;
    if (htmlEl.classList.contains('dark-mode')) {
      htmlEl.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      console.log ("set to light");
    } else {
      htmlEl.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      console.log ("set to dark");
    }
  }

// On app init, check saved theme
  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    }
  }
}
