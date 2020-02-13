import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  items: any[];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((res: any) => {
      this.itemService.getItems(res.params.search)
        .subscribe((res: any[]) => {
          this.items = res;
        }, err => console.error(err));
    });
  }

}
