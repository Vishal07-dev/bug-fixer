import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { authGuard } from './Guard/auth.guard';
import { InstallationGuideComponent } from './Components/installation-guide/installation-guide.component';
import { FixingBugComponent } from './Components/fixing-bug/fixing-bug.component';
import { CfsComponent } from './Components/cfs/cfs.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'welcome',
                component: WelcomePageComponent
            },
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [authGuard],
                children: [{
                    path: '',
                    component: InstallationGuideComponent,

                },
                {
                    path: 'fixer',
                    component: FixingBugComponent,

                },
                {
                    path: 'cfs',
                    component: CfsComponent,

                }]

            },
            {
                path: 'contact',
                component: ContactPageComponent
            }

        ],

    },


];
