import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { TeamMember } from '../../../shared/models/teamMember';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FadeAndSlideIn } from '../../../shared/animations/FadeAndSlideIn';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';
import { optimizeUrlCloudy } from '../../../shared/utils/optimizeUrlCloudy';
import { ASSETS } from '../../../shared/constants/image-library';

@Component({
  selector: 'app-team',
  imports: [CommonModule, Corousel],
  templateUrl: './team.html',
  animations: [FadeAndSlideIn],
  styleUrl: './team.css'
})
export class Team implements AfterViewInit {
  readonly ASSETS = ASSETS;
  team: TeamMember[] = [];
  constructor() {
    for (let index = 0; index < 15; index++) {
      this.team.push(
        {
          img: ASSETS.content.imagePlaceholder,
          name: "Olivia Rhye",
          charge: "Fundador y directivo",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
      )

    }
  }
  carousel: carouselDTO = this.createCarousel();


  teamImage = optimizeUrlCloudy(ASSETS.cloudinary.teamHero);

  createCarousel() {
    const images = [
      optimizeUrlCloudy(ASSETS.cloudinary.carouselArtboard1),
      optimizeUrlCloudy(ASSETS.cloudinary.carouselArtboard2),
      optimizeUrlCloudy(ASSETS.cloudinary.carouselArtboard3)]
    const car: carouselDTO = {
      carousel: 3,
      banners: images.map(x => ({
        name: "Título atractivo en 2 líneas de texto",
        description: "Descripción corta del evento o producto que se este promocionando.",
        image: x,
        id: 1,
        prodId: "",
        carouselId: 1
      }))
    }
    return car;
  }
  platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

}
