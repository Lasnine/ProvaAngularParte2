import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { IContacts } from './interface/Contacts';
import { IMessage } from './interface/Message';

@Injectable({
  providedIn: 'root',
})

export class AuthApi extends Api{
    login = (data: IContacts) : Observable<string> => {
        return this.client.post<string>(`${this.URL}/contacts`, data).pipe();
    }
    subscribe = (data: IMessage) : Observable<void> => {
        return this.client.post<void>(`${this.URL}/messages`, data).pipe();
    }
}