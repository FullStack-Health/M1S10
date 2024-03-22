import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './conteudos/conteudo-page/home.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { CreateComponent } from './alimentos/create/create.component';
import { DetalhamentoComponent } from './alimentos/detalhamento/detalhamento.component';
import { MusicComponent } from './conteudos/music/music.component';
import { MusicDetailComponent } from './conteudos/music/music-detail/music-detail.component';

//Módulo de rotas para o projeto
export const routes: Routes = [
    {
        path: "", //Rota inicial (assim que o projeto é 'buildado' ele entra nessa rota)
        redirectTo: "alimentos", //redirecionamento (qual path que será redirecionado ao entrar na rota "")
        pathMatch: "full" //significa que a rota (path) deve ser inteiramente compatível com o redirectTo
    },
    {
        path: "cadastro", //rota para cadastro no portal
        component: RegisterComponent
    },
    {
        path: "conteudo", //rota para conteudo visto em aula
        component: HomeComponent
    },
    {
        path: "alimentos", //rota para listagem de alimentos
        children: [ //atributo usado para carregar rotas filhas
            { path: "", component: AlimentosComponent }, //url: alimentos/
            { path: "criar", component: CreateComponent}, //url: alimentos/criar
            { path: ":alimento", component: DetalhamentoComponent} //url: alimentos/[informação chave]
        ]
    },

    //Rota usada apenas para o conteudo ensinado, não faz parte do projeto
    {
        path: "music",
        children: [
            {path: "", component: MusicComponent},
            {path: ":id", component: MusicDetailComponent}
        ]
    }
];
