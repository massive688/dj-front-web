import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompubComponent } from './compub.component';
import { LoginregistryComponent } from './components/user/loginregistry/loginregistry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompubComponent, LoginregistryComponent]
})
export class CompubModule { }
