import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { CreateComponent } from './medicamentos/create/create.component';
import { DetalhamentoComponent } from './medicamentos/detalhamento/detalhamento.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "cadastro",
        component: RegisterComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "medicamentos",
        children: [
            { path: "", component: MedicamentosComponent },
            { path: "criar", component: CreateComponent},
            { path: ":identificador", component: DetalhamentoComponent}
        ]
    },
];
