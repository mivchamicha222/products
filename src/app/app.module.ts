import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { TitleComponent } from '../app/componentss/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaguinationComponent } from '../app/componentss/paguination/paguination.component';
import { TableComponent } from '../app/componentss/table/table.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PaguinationComponent, 
    TableComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}