import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gst-get-detail',
  templateUrl: './gst-get-detail.component.html',
  styleUrls: ['./gst-get-detail.component.scss']
})
export class GstGetDetailComponent implements OnInit {
  business: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private bs: BusinessService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.getDetailBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }

}
