import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-photography',
  imports: [CommonModule],
  templateUrl: './photography.html',
  styleUrl: './photography.scss'
})
export class Photography {
  photos = [
        { src: 'assets/images/photo5.jpg', title: 'Mountainse' },
    { src: 'assets/images/photo1.jpg', title: 'car' },
    { src: 'assets/images/photo2.jpg', title: 'Mountains' },
    
   { src: 'assets/images/photo6.jpg', title: 'Sunsetw' },
    { src: 'assets/images/photo3.jpg', title: 'Ocean' },
    { src: 'assets/images/photo4.jpg', title: 'Sunsetw' },

    { src: 'assets/images/photo7.jpg', title: 'Mountainse' },
    { src: 'assets/images/photo8.jpg', title: 'Sunsetw' },
    { src: 'assets/images/photo9.jpg', title: 'Mountainse' },
    { src: 'assets/images/photo10.jpg', title: 'Ocean' },
    { src: 'assets/images/plane1.jpg', title: 'Plane' },
    { src: 'assets/images/winggundam1.JPG', title: 'Wing Gundam' },
    { src: 'assets/images/winggundam2.JPG', title: 'Wing Gundam 2' },
    { src: 'assets/images/forest1.JPG', title: 'forest' },
    // ... more photos
  ];

selectedPhoto: string | null = null;

  openPhoto(photoSrc: string) {
    this.selectedPhoto = photoSrc;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

}
