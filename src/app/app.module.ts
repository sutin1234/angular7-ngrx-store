import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadStoreComponent } from './components/read.store/read.store.component';
import { CreateStoreComponent } from './components/create.store/create.store.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadStoreComponent,
    CreateStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
