import { Component } from '@angular/core';
import swal from 'sweetalert';


@Component({
  templateUrl: 'empresas.component.html'
})
export class EmpresasComponent {

  	constructor() {
  		// swal("Good job!", "You clicked the button!", "success");
  	}
   	isCollapsed: boolean = false;
  	iconCollapse: string = "icon-arrow-up";

  	collapsed(event: any): void {
    	// console.log(event);
  	}
  	expanded(event: any): void {
    	// console.log(event);
  	}

	toggleCollapse(): void {
	    this.isCollapsed = !this.isCollapsed;
	    this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
	}
	init(){
		alert('gggg');
	}
}
