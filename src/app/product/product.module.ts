import { FormsModule } from '@angular/forms';
import { ProductEffects } from './product.effect';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { reducer, ProductState, FeatureProducts } from './product.reducer';
import { StoreModule, Action } from '@ngrx/store';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature<FeatureProducts, Action>('featureProducts', reducer)
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]   
})
export class ProductModule { }
