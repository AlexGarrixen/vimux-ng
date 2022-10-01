import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { seriesApi, EpisodesResponse } from '@app/store/services';

const { useGetEpisodesQuery } = seriesApi;

@Component({
  selector: 'serie-episodes',
  templateUrl: './episodes-list.component.html',
})
export class EpisodesListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  serieId = this.route.snapshot.params['id'];
  query$ = useGetEpisodesQuery(this.serieId);
  data: EpisodesResponse['items'] = [];
  isLoading: boolean = true;
  isError: boolean | undefined = undefined;

  ngOnInit(): void {
    this.query$.subscribe(({ data, isLoading, isError }) => {
      this.isLoading = isLoading;
      this.isError = isError;

      if (data) this.data = data.items;
    });
  }
}
