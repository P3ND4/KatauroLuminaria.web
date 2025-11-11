import { AfterViewInit, Component } from '@angular/core';
import { TeamMember } from '../../../shared/models/teamMember';
import { CommonModule } from '@angular/common';
import { FadeAndSlideIn } from '../../../shared/animations/FadeAndSlideIn';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';

@Component({
  selector: 'app-team',
  imports: [CommonModule, Corousel],
  templateUrl: './team.html',
  animations: [FadeAndSlideIn],
  styleUrl: './team.css'
})
export class Team implements AfterViewInit {
  team: TeamMember[] = [];
  constructor() {
    for (let index = 0; index < 15; index++) {
      this.team.push(
        {
          img: "/assets/Image.png",
          name: "Olivia Rhye",
          charge: "Fundador y directivo",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
      )

    }
  }

  carousel: carouselDTO = {
    carousel: 3,
    title: "Título atractivo en 2 líneas de texto",
    description: "Descripción corta del evento o producto que se este promocionando.",
    images: [
      '/assets/back_image4.png',
      '/assets/back_image5.png',
      '/assets/back_image.webp']
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

}
