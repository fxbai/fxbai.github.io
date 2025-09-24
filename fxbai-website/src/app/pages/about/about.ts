import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  skills = [
    'Angular',
    'TypeScript',
    'Java',
    'Python',
    'Flask',
    'SQL',
    'Git/GitHub',
  ];

  experience = [
    {
      role: 'Software Developer (Co-op)',
      company: 'ExampleCorp',
      period: 'Jan – Apr 2025',
      desc: 'Worked on enterprise Angular applications, improving UI and performance.',
    },
    {
      role: 'Student Developer',
      company: 'Hack the Valley Project',
      period: '2024',
      desc: 'Built an Android fitness app with interactive features for hackathon demo.',
    },
  ];
}