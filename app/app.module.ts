import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CriteriaInputComponent } from './components/criteria-input/criteria-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriteriaPrioComponent } from './components/criteria-prio/criteria-prio.component';
import { AppRouterModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { OptionRatingComponent } from './components/option-rating/option-rating.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DecisionTemplateComponent } from './components/decision-template/decision-template.component';
import { GlobalDecideDataService } from './services/global-decide-data.service'
//import { FormControl } from '@angular/forms';
//import { FlexLayoutModule } from '@angular/flex-layout'; //does not work
//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CriteriaInputComponent,
    CriteriaPrioComponent,
    OptionRatingComponent,
    DecisionTemplateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
  ],
  providers: [GlobalDecideDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }