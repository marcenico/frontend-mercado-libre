import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-path',
  templateUrl: './category-path.component.html',
  styleUrls: ['./category-path.component.scss']
})
export class CategoryPathComponent implements OnInit {
  @Input() categories: string[];

  constructor() { }

  ngOnInit() {
  }

}
