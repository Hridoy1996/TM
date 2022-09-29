import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RootDefaultComponent } from './root-default/root-default.component';
import { routes } from './routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/modules/material/material.module';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,"./assets/i18n/common/",".json");
}
@NgModule({
  declarations: [
    RootDefaultComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot({},{}),
    TranslateModule.forRoot({
      defaultLanguage : "en",
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
    },
    isolate : true

    }),
   
    
  ],
  providers: [],
  bootstrap: [RootDefaultComponent]
})
export class RootModule { }
