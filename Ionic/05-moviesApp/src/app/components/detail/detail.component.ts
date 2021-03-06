import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, MovieDetail } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id: any;

  movie: MovieDetail = {};
  actors: Cast[] = [];
  hidden = 100;

  slideActorsOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  starIcon = 'star-outline';

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController,
              private dataLocal: DataLocalService) { }

  async ngOnInit() {
    // Check if movie exists.
    this.dataLocal.movieExists(this.id)
      .then(exists => this.starIcon = exists ? 'star' : 'star-outline');

    // Movie Details.
    this.moviesService.getMovieDetail(this.id)
      .subscribe(response => {
        this.movie = response;
      });

    // Actors Details.
    this.moviesService.getMovieActors(this.id)
    .subscribe(response => {
      this.actors = response.cast;
    });
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  favorite() {
    const exists = this.dataLocal.saveMovie(this.movie);
    this.starIcon = exists ? 'star' : 'star-outline';
  }

}
