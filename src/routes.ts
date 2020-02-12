import {Routes} from '@angular/router';
import { LoginComponent } from './app/pages/login/login.component';
import { RegistroComponent } from './app/pages/registro/registro.component';
import { ChatRoomComponent } from './app/pages/chat-room/chat-room.component';

export const appRoutes: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'chat', component: ChatRoomComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];