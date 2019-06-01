import { QuiestionsComponent } from './page/quiestions/quiestions.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';

const routes: Routes = [
    {path: '', component: SiteLayoutComponent, children:[
        {path: '', component: SearchComponent, pathMatch: 'full'},
        {path: 'questions', component: QuiestionsComponent}
    ]}
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}