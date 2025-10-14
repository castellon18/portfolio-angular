import { Contact } from "./contact.interface";

export interface SendEmail {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Contact
}
