import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { Deeplinks } from '@ionic-native/deeplinks';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string = 'PostsPage';

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private deeplinks: Deeplinks ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //
      this.deeplinks.route({
        '/': {},
        '/web' : {"web": true}
      }).subscribe( (match) => {
        console.log(JSON.stringify(match) );
      }, (noMatch) => {
        console.log(JSON.stringify(noMatch));
      })
    });

  }
}

