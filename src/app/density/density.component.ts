import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ELEMENT_DATA } from './data';
import { PeriodicElement } from './model';

@Component({
  selector: 'app-density',
  templateUrl: './density.component.html',
  styleUrls: ['./density.component.scss']
})
export class DensityComponent  {

  @ViewChild('table', { static: true }) table!: MatTable<PeriodicElement>;

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'quantity',
  ];
  dataSource = ELEMENT_DATA;
  dragDisabled = true;

  drop(event: CdkDragDrop<PeriodicElement[]>) {
    // Return the drag container to disabled.
    this.dragDisabled = true;

    const previousIndex = this.dataSource.findIndex(
      (d) => d === event.item.data
    );

    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
