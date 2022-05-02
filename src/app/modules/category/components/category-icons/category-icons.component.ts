import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { icons } from '../../constants/icons.const';
import { IconData } from '../../interfaces/category';

@Component({
	selector: 'app-category-icons',
	templateUrl: './category-icons.component.html',
	styleUrls: ['./category-icons.component.scss'],
})
export class CategoryIconsComponent implements OnInit {
	public readonly icons = icons;

	colorControl = new FormControl(this.ref.data?.color);

	constructor(public ref: DialogRef<IconData>) {}

	ngOnInit(): void {}

	clickIcon(name: string) {
		const data: IconData = { name, color: this.colorControl.value };
		this.ref.close(data);
	}
}
