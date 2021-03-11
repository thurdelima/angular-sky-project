import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/template/nav/nav.component';




import { MatSidenavModule } from  '@angular/material/sidenav';
import { HttpClientModule } from  '@angular/common/http';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsComponent } from './components/template/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SlideComponent } from './components/template/slide/slide.component'; 
import { OwlModule } from 'ngx-owl-carousel';
import { MoviesComponent } from './views/movies/movies.component';
import { ListMoviesComponent } from './components/template/list-movies/list-movies.component';
import { ListNationalMoviesComponent } from './components/template/list-national-movies/list-national-movies.component';
import { ListDcMoviesComponent } from './components/template/list-dc-movies/list-dc-movies.component';
import { ListMarvelMoviesComponent } from './components/template/list-marvel-movies/list-marvel-movies.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { SeriesComponent } from './views/series/series.component';
import { ChanelsComponent } from './views/chanels/chanels.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TabsComponent,
    SlideComponent,
    MoviesComponent,
    ListMoviesComponent,
    ListNationalMoviesComponent,
    ListDcMoviesComponent,
    ListMarvelMoviesComponent,
    FooterComponent,
    SeriesComponent,
    ChanelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule, 
    MatTabsModule,
    MatExpansionModule,
    OwlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
