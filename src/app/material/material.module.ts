import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorPtBrIntl } from '../ptbr.paginator.intl';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatDividerModule,
  MatListModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatPaginatorIntl,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: MatPaginatorPtBrIntl() }
  ],
  declarations: []
})
export class MaterialModule { }
