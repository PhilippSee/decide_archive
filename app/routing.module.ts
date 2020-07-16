import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CriteriaInputComponent } from './components/criteria-input/criteria-input.component';
import { CriteriaPrioComponent } from './components/criteria-prio/criteria-prio.component';

const routes:Routes = [
    {path:'',redirectTo:'',pathMatch:'prefix'},
    {
        path:'CriteriaInput',
        component:CriteriaInputComponent
    },
    {
        path:'CriteriaPriorization',
        component:CriteriaPrioComponent
    },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}