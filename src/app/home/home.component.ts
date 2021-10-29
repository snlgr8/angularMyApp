import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const observable = new Observable((observer) => {
      console.log("Text inside an observable");
      observer.next("Hello world!");
      observer.next(() => {
        setTimeout(() => {
          console.log("hellooo");
        }, 100);
        observer.complete();
      });
    });
    console.log("Before subscribing an Observable");

    observable.subscribe((message) => console.log(message));
  }
}
