import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/utils/ISearchResult';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: IItem;

  constructor() { }

  ngOnInit() {
  }

}
