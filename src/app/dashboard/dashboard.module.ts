import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'; // we also need angular router for Nebular to function properly
import {NbButtonModule} from '@nebular/theme';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, NbButtonModule],
})
export class DashboardModule {
}
