import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-thankyou-screen',
  templateUrl: './frame-thankyou-screen.component.html',
  styleUrls: ['./frame-thankyou-screen.component.css']
})
export class FrameThankyouScreenComponent implements OnInit {
  thankYouText: string;
  description: string;
  buttonLabel: string;

  constructor(private router: Router) {
    this.buttonLabel = 'Continue';
  }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
