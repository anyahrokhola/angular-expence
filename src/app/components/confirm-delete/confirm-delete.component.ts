import { Component, OnInit} from '@angular/core';
import { DialogRef} from '@ngneat/dialog';

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
