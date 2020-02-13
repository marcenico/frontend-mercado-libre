import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/items'], { queryParams: { search: this.query } })
  }

}
