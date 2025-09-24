import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
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
      role: 'Developer',
      company: 'UTRA HACKS, UltraVision Project',
      period: '2024',
      desc: 'UltraVision is a robotic assistant designed to help the visually impaired navigate their surroundings. The system integrates an ESP32-CAM, ultrasonic sensors, and Google Gemini AI to provide real-time scene descriptions and obstacle detection via a Flask web server.',
    },
    {
      role: 'Developer',
      company: 'Hack the Valley 7, FitTrack Project',
      period: '2022',
      desc: 'Built an Android fitness app with interactive features for hackathon demo, using Java and XML. Demo-ed on physical Android device',
    },

  ];
}