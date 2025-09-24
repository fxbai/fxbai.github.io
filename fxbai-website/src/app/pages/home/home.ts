import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  highlights = [
    {
      title: 'Projects',
      desc: 'See what I’ve built — from apps to experiments.',
      link: '/projects',
      icon: '💻',
    },
    {
      title: 'About Me',
      desc: 'Learn more about my background, skills, and interests.',
      link: '/about',
      icon: '🙋‍♂️',
    },
    {
      title: 'Contact',
      desc: 'Let’s connect — reach out for opportunities or collaboration.',
      link: '/contact',
      icon: '✉️',
    },
  ];
}

