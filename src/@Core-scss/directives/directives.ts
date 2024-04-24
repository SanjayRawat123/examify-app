import { NgModule } from '@angular/core';
import { RippleEffectDirective } from './core-ripple-effect/core-ripple-effect.directive';
import { FeatherIconDirective } from './core-feather-icons/core-feather-icons';


@NgModule({
  declarations: [RippleEffectDirective, FeatherIconDirective],
  exports: [RippleEffectDirective, FeatherIconDirective]
})
export class CoreDirectivesModule {}
