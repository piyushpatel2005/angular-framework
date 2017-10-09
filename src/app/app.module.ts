import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Restangular, RestangularModule } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { MdToolbarModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { baseURL } from './shared/baseurl';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
    AppRoutingModule,
    FormsModule,
    MdDialogModule,
    MdInputModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHttpmsgService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
