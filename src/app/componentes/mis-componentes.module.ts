import { VisualProductComponent } from './visual-product/visual-product.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './explore-container/explore-container.component';



@NgModule({
  declarations: [ExploreContainerComponent],
  imports: [CommonModule, IonicModule],
  exports: [ExploreContainerComponent]
})
export class MisComponentesModule { }
