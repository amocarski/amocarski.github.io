import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private contactURL: string = '/assets/email-sender.php';

  constructor(private http: Http) { }

  ngOnInit() {
    $(window).trigger('resize').trigger('scroll');
  }

  sendEmail(value: any, event: Event) {
    event.preventDefault();

    const contactBody = {
      name : value.name,
      email : value.email,
      title : value.title,
      message : value.message
    };

    this.http.post(this.contactURL, contactBody)
      .subscribe(
        response => console.log(response)
      );
  }

}
