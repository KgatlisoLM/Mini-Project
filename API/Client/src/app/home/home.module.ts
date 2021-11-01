import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeItemComponent } from './home-item/home-item.component';
import { ToastrModule} from 'ngx-toastr';





@NgModule({
  declarations: [HomeComponent, HomeItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates:true
    })
  ],
  exports: []
})
export class HomeModule { }
