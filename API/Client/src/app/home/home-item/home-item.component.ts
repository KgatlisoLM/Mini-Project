import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../../shared/models/company';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent implements OnInit {
@Input() company: ICompany;
  constructor() { }

  ngOnInit(): void {
  }

}
