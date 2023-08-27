import {Injectable, TemplateRef} from '@angular/core';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor( private readonly notification: MessageService) {
  }


  show(severity: string, detail: string): void {
    this.notification.add({
      severity,
      detail,
    });
  }
}
