import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';
import { IItem } from 'src/app/utils/ISearchResult';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: IItem;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Detalle producto')
    const id = this.route.snapshot.params.id;
    this.itemService.getById(id)
      .subscribe((res: any) => {
        this.item = res.item;
      }, err => console.error(err));
  }

}
