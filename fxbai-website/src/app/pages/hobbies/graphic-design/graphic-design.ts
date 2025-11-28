import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-graphic-design',
  imports: [CommonModule],
  templateUrl: './graphic-design.html',
  styleUrl: './graphic-design.scss'
})
export class GraphicDesign {

  photos = [
        { full: 'assets/images/nsx.png', thumbnail: '', title: 'Design 1: Honda NSX' }
    , { full: 'assets/images/aventadormonotone.png', thumbnail: '', title: 'Design 2: Lamborghini Aventador' }
    , { full: 'assets/images/pagani.png', thumbnail: '', title: 'Design 3: Pagani Zonda' }
    , { full: 'assets/images/radiance.png', thumbnail: '', title: 'Design 4: radiance' }
  ];


selectedPhoto: string | null = null;

  openPhoto(photoSrc: string) {
    this.selectedPhoto = photoSrc;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

}
