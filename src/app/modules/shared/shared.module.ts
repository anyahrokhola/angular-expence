import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [TooltipComponent, ErrorComponent],
  imports: [CommonModule],
  providers: [],
  exports: [TooltipComponent, ErrorComponent],
})
export class SharedModule {}
