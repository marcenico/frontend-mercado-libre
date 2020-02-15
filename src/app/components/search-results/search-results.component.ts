import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';
import { ISearchResult } from 'src/app/utils/ISearchResult';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResult: ISearchResult;

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((res: any) => {
      this.itemService.getItems(res.params.search)
        .subscribe((res: ISearchResult) => {
          this.itemService.categories = res.categories;
          this.searchResult = res;
        }, err => console.error(err));
    });
  }

}
