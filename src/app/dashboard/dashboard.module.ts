import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { ItemSourceComponent } from './item-source/item-source.component';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemGroupsComponent } from './item-groups/item-groups.component';
import { GroupComponent } from './item-groups/group/group.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(dashboardRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    DragDropModule,
    MatCheckboxModule,
    MatBadgeModule,
  ],
  declarations: [
    DashboardComponent,
    ItemSourceComponent,
    ItemGroupsComponent,
    GroupComponent,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
