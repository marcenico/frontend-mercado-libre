import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query = '';

  constructor(
    private itemService: ItemService,
  ) { }

  ngOnInit() {
  }

  search() {
    this.itemService.getItems(this.query)
      .subscribe((res) => {
        console.log(res)
      }, err => console.error(err));
  }

}
