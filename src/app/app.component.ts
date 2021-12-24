import { Component, VERSION } from '@angular/core';
import  moment from 'moment-timezone';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  listOfTimezones = moment.tz.names();
  currentTimezone = moment.tz.guess();
}
