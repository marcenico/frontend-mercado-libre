import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.itemService.getById(id)
      .subscribe((res: any) => {
        console.log(res);
      }, err => console.error(err));
  }

}
