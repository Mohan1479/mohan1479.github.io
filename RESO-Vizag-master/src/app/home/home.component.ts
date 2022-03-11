import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Resonance-Vizag';
  enquireForm: FormGroup;
  constructor(config: NgbCarouselConfig) {

    config.interval = 3500;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
}

ngOnInit() {
  console.log(this.enquireForm);
    this.enquireForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'parentname' : new FormControl(null,Validators.required),
      'branch': new FormControl(null,Validators.required),
      'course': new FormControl(null,Validators.required),
      'phoneno': new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
    });

/*     this.enquireForm.statusChanges.subscribe(
      
      (status) => {
        console.log(this.enquireForm);
        //console.log(this.signupForm);
      }
    ); */


    $('body').css('padding-top', $('.navbar').innerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    var scroll_top;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
}

onSubmit() {
  console.log(this.enquireForm);
}
}
