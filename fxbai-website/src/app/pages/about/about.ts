import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  skills = [
    'Angular',
    'TypeScript',
    'Java',
    'CSS/HTML',
    'SpringBoot Framework',
    'Git/GitHub',
  ];

  experience = [
    {
      role: 'Software Developer (Co-op)',
      company: 'CIBC',
      period: 'May – Aug 2025',
      desc: 'Developed enterprise Angular19 proof-of-concept application, to modernize the existing loan management system.' 
        + ' Integrated RESTful API with SpringBoot backend services to Angular frontend for smooth, and fast data handling, to move on from stateful JSPs and Servlet apps. ',
    },
    {
      role: 'Student Developer',
      company: 'Hack the Valley Project',
      period: '2024',
      desc: 'Built an Android fitness app with interactive features for hackathon demo.',
    },
  ];
}