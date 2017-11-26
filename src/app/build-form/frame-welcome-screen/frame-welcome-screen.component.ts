import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-welcome-screen',
  templateUrl: './frame-welcome-screen.component.html',
  styleUrls: ['./frame-welcome-screen.component.css']
})
export class FrameWelcomeScreenComponent implements OnInit {
  welcomeText: string;
  description: string;
  buttonLabel: string;

  constructor(private router: Router) {
    this.buttonLabel = 'Start';
  }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
