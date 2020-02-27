import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  deferredPrompt: any;
  showInstallBtn: boolean = true;
  
  constructor(public router: Router) { 
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt Event fired');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      this.showInstallBtn = true;
    });
  }

  ngOnInit() {
    if(this.deferredPrompt === undefined){
      this.showInstallBtn = false;
    }
  }
  
  showInstallBanner() {
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt!');
        } else {
          console.log('User dismissed the install prompt!');
        }
        // We no longer need the prompt.  Clear it up.
        this.deferredPrompt = null;
      });
    }
  }
}
