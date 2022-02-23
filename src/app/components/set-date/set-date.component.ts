import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';

@Component({
	selector: 'app-set-date',
	templateUrl: './set-date.component.html',
	styleUrls: ['./set-date.component.scss'],
})
export class SetDateComponent implements OnInit {
	dateControl = new FormControl(this.ref.data?.date || new Date());

	constructor(public ref: DialogRef) {}

	ngOnInit(): void {}

	setNewdata() {
		this.ref.close(this.dateControl.value);
	}
}
