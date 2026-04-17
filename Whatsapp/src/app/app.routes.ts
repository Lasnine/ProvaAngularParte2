import { Routes } from '@angular/router';
import { ChatPage } from './features/chat-page/chat-page';
import { ContactsPage } from './features/contacts-page/contacts-page';

export const routes: Routes = [
    {path: 'chat', component: ChatPage},
    {path: '', component: ContactsPage},
];
