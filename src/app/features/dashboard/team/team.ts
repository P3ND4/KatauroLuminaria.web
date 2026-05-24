import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { TeamMember } from '../../../shared/models/teamMember';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FadeAndSlideIn } from '../../../shared/animations/FadeAndSlideIn';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';
import { SeoService } from '../../../shared/services/seo/seo.service';
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
  private seo = inject(SeoService);
  constructor() {
    this.seo.setPage('Nuestro equipo', 'Conoce al equipo multidisciplinario detrás de Katauro Luminarias, especializado en diseño y producción de luminarias desde 2013.');
    this.team = [
      { img: ASSETS.cloudinary.teamMembers.angelFornaris, name: 'Ángel R. Fornaris', charge: 'Director General', description: '' },
      { img: ASSETS.cloudinary.teamMembers.rosaRodriguez, name: 'Rosa Y. Rodríguez Adán', charge: 'Directora Adjunta', description: '' },
      { img: ASSETS.cloudinary.teamMembers.gabrielaGarcia, name: 'Gabriela García Valdespino', charge: 'Dependienta', description: '' },
      { img: ASSETS.cloudinary.teamMembers.adisYilian, name: 'Adis Yilian Bravo Frion (Yilian)', charge: 'Especialista en Compras', description: '' },
      { img: ASSETS.cloudinary.teamMembers.giselleRuiz, name: 'Giselle de la Caridad Ruiz Fernández de Velasco', charge: 'Dependienta', description: '' },
      { img: ASSETS.cloudinary.teamMembers.davidBatista, name: 'David Batista Reyes', charge: 'Jefe de Brigada de Carpintería y Herrería', description: '' },
      { img: ASSETS.cloudinary.teamMembers.giselleRosell, name: 'Giselle Rosell Alonso', charge: 'Administradora General', description: '' },
      { img: ASSETS.cloudinary.teamMembers.porfirioMerino, name: 'Porfirio Merino Figueredo (Merino)', charge: 'Jefe de Brigada de Pantalla', description: '' },
      { img: ASSETS.cloudinary.teamMembers.marioMartin, name: 'Mario Martín Dueñas Aralla', charge: 'Operario de Herrería', description: '' },
      { img: ASSETS.cloudinary.teamMembers.alejandroTorres, name: 'Alejandro Torres Caballero', charge: 'Jefe de Producción', description: '' },
      { img: ASSETS.cloudinary.teamMembers.adrianFonseca, name: 'Adrián Fonseca Maceda', charge: 'Especialista en Herrería', description: '' },
      { img: ASSETS.cloudinary.teamMembers.juanFernando, name: 'Juan Fernando Infante Durán (El Profe)', charge: 'Asesor de Diseño', description: '' },
      { img: ASSETS.cloudinary.teamMembers.lourdesSoto, name: 'Lourdes Soto Bengochea', charge: 'Operaria en Pantalla', description: '' },
      { img: ASSETS.cloudinary.teamMembers.andresEmilio, name: 'Andrés Emilio Zabala Rivas (El tío)', charge: 'Operario en Acabado', description: '' },
      { img: ASSETS.cloudinary.teamMembers.yoandyNolazco, name: 'Yoandy Nolazco Cala', charge: 'Especialista en Acabado', description: '' },
      { img: ASSETS.cloudinary.teamMembers.joseLazaro, name: 'José Lázaro Aballí Rabasa (El Chino)', charge: 'Especialista en Mantenimiento', description: '' },
    ];
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
