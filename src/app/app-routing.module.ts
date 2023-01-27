import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth-guard.service";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/signup', pathMatch: 'full'}, //<-- pathMatch previne erros vinculados a paginas incompletas
    {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent },
    { path: '**', pathMatch: 'full', component: PagenotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
