import { Routes } from '@angular/router';
import { ApiConsumerComponent} from './components/api-consumer/api-consumer';

export const routes: Routes = [

    { path: 'home', component: ApiConsumerComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full' },
]

   
