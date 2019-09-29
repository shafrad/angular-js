import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/business';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {
  businesses: Business[];
  constructor(private bs: BusinessService) { }

  ngOnInit() {
    console.log('disini');
    const self = this;
    self.bs.getAllBusinesses().subscribe((data: any[]) => {
      self.businesses = data;
    });
  }

  reloadPage() {
    location.reload();
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Data has been deleted successfully', res);
      this.ngOnInit();
    });
    console.log('berjalan', id);
  }

  getDetailBusiness(id) {
    console.log('jalan juga', id)
  }

}
