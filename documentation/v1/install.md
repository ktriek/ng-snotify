###### NPM 5
`npm install ng-snotify`
###### yarn
`yarn add ng-snotify`


#### Import Module
Import SnotifyModule, also you can try SnotifyModule.forRoot() if you have build errors  
And provide SnotifyService
```typescript
// Import your library
import { SnotifyModule, SnotifyService } from 'ng-snotify';

@NgModule({
  imports: [
    BrowserModule,
    SnotifyModule
  ],
  providers: [SnotifyService]
})
export class AppModule { }
```

#### Add selector
Add `app-snotify` component to you root component

```html
<app-snotify></app-snotify>
```
#### Dependency injection
Now you should inject `SnotifyService`

```typescript
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snotifyService: SnotifyService) {}
}

```
