import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SendEmail } from '@interfaces/send-email.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailJsService {

  private http = inject(HttpClient);
  private apiUrl = environment.ApiUrl;

  sendEmail(data: SendEmail) {
    return this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json',}, responseType: 'text' });
  }
}
