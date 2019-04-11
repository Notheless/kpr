import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


// TODO: remove this after integrating with the backend
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './layout/head/head.component';
import { LeftPanelComponent } from './layout/left-panel/left-panel.component';
import { SimulationFormsComponent } from './components/simulation-forms/simulation-forms.component';
import { SimulationResultComponent } from './components/simulation-result/simulation-result.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsDetailComponent } from './components/reports-detail/reports-detail.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftPanelComponent,
    SimulationFormsComponent,
    SimulationResultComponent,
    ReportsComponent,
    ReportsDetailComponent,
    FooterComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
