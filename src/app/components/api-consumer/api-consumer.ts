import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConsumerService } from '../../services/api-consumer.service';
import { Series } from '../../models/series';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-consumer',
  imports: [CommonModule],
  templateUrl: './api-consumer.html',
  styleUrl: './api-consumer.css',
})
  
  
export class ApiConsumerComponent  implements OnInit {

  series: any[] = [];
 

  constructor(private apiConsumerService: ApiConsumerService,
    private http: HttpClient

  ) { }
    
  ngOnInit(): void {

    this.apiConsumerService.getSeries()
      .subscribe(resp => {
        console.log(resp);
        this.series = resp.results; // Asumiendo que la respuesta tiene una propiedad 'results' con la lista de series
      });
    
     
  }
  getSeriesImages(episodeId: number): string {
  const images: { [key: number]: string } = {
    1: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
    2: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
    3: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
    4: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    5: 'https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg',
    6: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
  };
  return images[episodeId] || 'https://via.placeholder.com/300x450?text=Star+Wars';
}
  onImgError(event: any): void {
    event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
  }


}
  

    