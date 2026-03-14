import { Component, OnInit } from '@angular/core';
import { sharedModule } from '../../shared/shared';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [sharedModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation implements OnInit {

  public currentDB = "Money Expenses";

  ngOnInit(): void {
    console.log("Navigation Loaded");
  }

}