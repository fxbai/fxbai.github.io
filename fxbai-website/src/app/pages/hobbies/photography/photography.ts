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
        { full: 'assets/images/portfolio/photo5.jpg', thumbnail: 'assets/images/thumbnail/photo5_thumbnail.jpg', title: 'U building' },
    { full: 'assets/images/portfolio/photo1.jpg', thumbnail: 'assets/images/thumbnail/photo1_thumbnail.jpg', title: 'red brz' },
    { full: 'assets/images/portfolio/photo2.jpg', thumbnail: 'assets/images/thumbnail/photo2_thumbnail.jpg', title: 'red brz hood' },

   { full: 'assets/images/portfolio/photo6.jpg', thumbnail: 'assets/images/thumbnail/photo6_thumbnail.jpg', title: 'twilight' },
    { full: 'assets/images/portfolio/photo3.jpg', thumbnail: 'assets/images/thumbnail/photo3_thumbnail.jpg', title: 'sunset' },
    { full: 'assets/images/portfolio/photo4.jpg', thumbnail: 'assets/images/thumbnail/photo4_thumbnail.jpg', title: 'brz Shed' },

    { full: 'assets/images/portfolio/photo7.jpg', thumbnail: 'assets/images/thumbnail/photo7_thumbnail.jpg', title: 'Wheels' },
    { full: 'assets/images/portfolio/photo8.jpg', thumbnail: 'assets/images/thumbnail/photo8_thumbnail.jpg', title: 'black bmw2' },
    { full: 'assets/images/portfolio/photo9.jpg', thumbnail: 'assets/images/thumbnail/photo9_thumbnail.jpg', title: 'black bmw' },
    { full: 'assets/images/portfolio/photo10.jpg', thumbnail: 'assets/images/thumbnail/photo10_thumbnail.jpg', title: 'Red Flowers' },
    
    { full: 'assets/images/portfolio/gotrain.jpg', thumbnail: 'assets/images/thumbnail/gotrain.jpg', title: 'go train' },
    { full: 'assets/images/portfolio/insidegotrain.jpg', thumbnail: 'assets/images/thumbnail/insidegotrain.jpg', title: 'inside go train' },
    { full: 'assets/images/portfolio/penguin.JPG', thumbnail: 'assets/images/thumbnail/penguin.jpg', title: 'penguin' },
    { full: 'assets/images/portfolio/redflowers.JPG', thumbnail: 'assets/images/thumbnail/redflowerscompressed.jpg', title: 'red flowers' },

    { full: 'assets/images/portfolio/plane1.jpg', thumbnail: 'assets/images/thumbnail/plane1_thumbnail.jpg', title: 'Plane' },
    { full: 'assets/images/portfolio/winggundam1.JPG', thumbnail: 'assets/images/thumbnail/winggundam1_thumbnail.JPG', title: 'Wing Gundam' },
    { full: 'assets/images/portfolio/winggundam2.JPG', thumbnail: 'assets/images/thumbnail/winggundam2_thumbnail.JPG', title: 'Wing Gundam 2' },
    { full: 'assets/images/portfolio/forest1.JPG', thumbnail: 'assets/images/thumbnail/forest1_thumbnail.JPG', title: 'forest' },
    { full: 'assets/images/portfolio/bridge.JPG', thumbnail: 'assets/images/thumbnail/bridge.jpg', title: 'bridge' },
    { full: 'assets/images/portfolio/dividedsunset.JPG', thumbnail: 'assets/images/thumbnail/dividedsunset.jpg', title: 'divided sunset' },
    
    
  ];

selectedPhoto: string | null = null;

  openPhoto(photoSrc: string) {
    this.selectedPhoto = photoSrc;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

}
