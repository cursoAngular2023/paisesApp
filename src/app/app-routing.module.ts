import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    // Ruta principal por defecto
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    // Carga página para ver un país pasado como argumento
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    // Excepción: Cualquiero otra ruta que no sea las anteriores
    // redirecciona a la ruta principal
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}