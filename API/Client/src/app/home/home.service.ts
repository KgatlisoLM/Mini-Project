import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { CompanyFormValues, ICompany } from '../shared/models/company';
import { Params } from '../shared/models/params';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl ='https://localhost:5001/api/';
  company: ICompany[] = [];
  params = new Params()
 
  constructor(private http: HttpClient) { }


  createCompany(company: CompanyFormValues){
    return this.http.post(this.baseUrl + 'company', company);
  }


  getCompanies(){

  let params = new HttpParams();

   if (this.params.searchQuery) {
    params = params.append('searchQuery', this.params.searchQuery);
  }

  return this.http.get<ICompany[]>(this.baseUrl + 'company', {observe: 'response', params})
  .pipe(
    map(response => {
      this.company = [...this.company, ...response.body];
      this.company = response.body;
      return this.company;
    })
  )

  }

  getParams(){
    return this.params;
  }

  setParams(params: Params){
    this.params = params
  }

 
}
