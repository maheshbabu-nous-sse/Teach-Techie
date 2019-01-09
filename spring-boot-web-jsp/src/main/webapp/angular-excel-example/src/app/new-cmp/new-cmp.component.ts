import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-new-cmp',
   templateUrl: './new-cmp.component.html'
})

export class NewCmpComponent implements OnInit {
   newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
}