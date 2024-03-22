import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { CreateComponent } from './alimentos/create/create.component';
import { DetalhamentoComponent } from './alimentos/detalhamento/detalhamento.component';
import { MusicComponent } from './conteudos/music/music.component';
import { MusicDetailComponent } from './conteudos/music/music-detail/music-detail.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "alimentos",
        pathMatch: "full"
    },
    {
        path: "cadastro",
        component: RegisterComponent
    },
    {
        path: "conteudo",
        component: HomeComponent
    },
    {
        path: "alimentos",
        children: [
            { path: "", component: AlimentosComponent },
            { path: "criar", component: CreateComponent},
            { path: ":alimento", component: DetalhamentoComponent}
        ]
    },
    {
        path: "music",
        children: [
            {path: "", component: MusicComponent},
            {path: ":id", component: MusicDetailComponent}
        ]
    }
];
