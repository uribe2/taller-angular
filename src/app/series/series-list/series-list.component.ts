import { Component, OnInit } from '@angular/core';

import { SeriesService } from '../series.service';
import { CommonModule } from '@angular/common';
import { Series } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
  imports: [CommonModule],
})
export class SeriesListComponent implements OnInit {

  series: Series[] = [];
  seasonsAverage: number = 0;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.seasonsAverage = this.calculateSeasonsAverage();
    });
  }

    calculateSeasonsAverage(): number {
      const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      return total / this.series.length;
    }

  selectedSerie: Series | null = null;

  onSelect(serie: Series): void {
    if (this.selectedSerie === serie) {
      this.selectedSerie = null;  // Deselect if already selected
    } else {
      this.selectedSerie = serie; // Select new one
    }
  }

}
