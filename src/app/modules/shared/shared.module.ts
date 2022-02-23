import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ErrorComponent } from './components/error/error.component';
import { DotsComponent } from './components/dots/dots.component';
import { ButtonModule } from '../buttons/buttons.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
	declarations: [TooltipComponent, ErrorComponent, DotsComponent],
	imports: [CommonModule, ButtonModule, ModalModule],
	providers: [],
	exports: [TooltipComponent, ErrorComponent, DotsComponent],
})
export class SharedModule {}
