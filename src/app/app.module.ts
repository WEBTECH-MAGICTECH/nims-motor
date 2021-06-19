import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyAppNavComponent } from './my-app-nav/my-app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UseAllComponent } from './components/use-all/use-all.component';
import { UserSingleComponent } from './components/user-single/user-single.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppNavComponent,
    UseAllComponent,
    UserSingleComponent,
    NavbarComponent,
    MenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
