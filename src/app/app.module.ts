import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { ChatFormComponent } from './pages/chat-form/chat-form.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';
import { ItemComponent } from './pages/item/item.component';

import { appRoutes } from 'src/routes';
import { environment } from 'src/environments/environment';


import { ChatService } from './servicios/chat.service';
import { AuthService } from './servicios/auth.service';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ChatRoomComponent,
    ChatFormComponent,
    MensajesComponent,
    NavegacionComponent,
    ItemComponent,
    ListUserComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
