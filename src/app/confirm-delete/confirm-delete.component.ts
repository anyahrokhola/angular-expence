import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { Expence } from '../interfaces/expence';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(public ref: DialogRef) {}

  ngOnInit(): void {}

  isConfirm() {
    this.ref.close(true);
  }
}
