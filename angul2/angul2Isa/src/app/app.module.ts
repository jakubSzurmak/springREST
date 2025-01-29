import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { MainComponent } from './component/main/main.component';
import { ShoeListComponent } from './shoe/view/shoe-list/shoe-list.component';
import { HttpClientModule } from "@angular/common/http";
import { ShoeService } from "./shoe/service/shoe.service";
import { RunnerListComponent } from './runner/view/runner-list/runner-list.component';
import { RunnerService } from './runner/service/runner.service';
import { RunnerViewComponent } from './runner/view/runner-view/runner-view.component';
import { RunnerEditComponent } from './runner/view/runner-edit/runner-edit.component';
import { FormsModule } from "@angular/forms";
import { RunnerAddComponent } from "./runner/view/runner-add/runner-add.component";
import { ShoeAddComponent } from "./shoe/view/shoe-add/shoe-add.component";
import { ShoeEditComponent } from "./shoe/view/shoe-edit/shoe-edit.component";
import { ShoeViewComponent } from "./shoe/view/shoe-view/shoe-view.component";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    ShoeListComponent,
    RunnerListComponent,
    RunnerViewComponent,
    RunnerEditComponent,
    RunnerAddComponent,
    ShoeAddComponent,
    ShoeEditComponent,
    ShoeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RunnerService,
    ShoeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
