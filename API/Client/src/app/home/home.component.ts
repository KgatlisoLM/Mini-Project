import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';
import { CompanyFormValues, ICompany } from '../shared/models/company';
import { Params } from '../shared/models/params';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('companyForm', {static: false}) companyForm: NgForm;
  @ViewChild('searchQuery') searchTerm: ElementRef;
  companies: ICompany[];
  params: Params;
  company : CompanyFormValues;
  show:boolean = false;
  constructor( private route: ActivatedRoute, 
               private router: Router, 
               private homeService: HomeService,
               private toastr: ToastrService) {
      this.company =  new CompanyFormValues();
      this.params = this.homeService.getParams();
     }

  ngOnInit(): void {
    this.getCompanies()
  }

  toggle(){
    this.show = !this.show;
  }

  onSumbit(company: CompanyFormValues){
    const newCompany = {...company};
    this.homeService.createCompany(newCompany).subscribe((response: any) => {
      this.router.navigate(['/']);
      this.toastr.success('Company added Successfully');
    });
    this.companyForm.resetForm();
  }
 
  getCompanies(){
    this.homeService.getCompanies().subscribe(response => {
      this.companies = response;
    }, error => {
      console.log(error);
    });
  }

  onSearch(){
    const params = this.homeService.getParams();
    params.searchQuery = this.searchTerm.nativeElement.value;
    this.homeService.setParams(params);
    this.getCompanies();
  }

  onReset(){
    this.searchTerm.nativeElement.value = '';
    this.params = new Params();
    this.homeService.setParams(this.params);
    this.getCompanies();
  }

}
