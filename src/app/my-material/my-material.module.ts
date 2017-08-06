import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
const theseModules = [
  CommonModule,
  MdInputModule,
  MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    MdDialogModule,
  MdGridListModule];

@NgModule({
  imports: theseModules,
  exports: theseModules,
  declarations: []
})
export class MyMaterialModule { }
