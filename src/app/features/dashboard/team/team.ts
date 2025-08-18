import { AfterViewInit, Component } from '@angular/core';
import { TeamMember } from '../../../shared/models/teamMember';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.html',
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

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

}
