import { Component, OnInit } from '@angular/core';
import {Title,Meta} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
albumList:any=[];
  constructor(private sharedService: SharedService,
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private webService: WebService) {
    this.titleService.setTitle('Listing Page');
    this.meta.updateTag({ name: 'Ablum List', content: 'Ablum List' })
    this.meta.updateTag({ name: 'Ablum List Description', content: 'Ablum List Description' })
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {

      let url ='photos' ;
    this.webService.get(url).subscribe((response: any) => {
      //  this.spinnerService.hide();
      // if (response.status == 1) {
      this.albumList = response;
      // }

    }, (error:any) => {
      console.log('error', error);
    });
  }

  viewDetails(item:any) {
    this.router.navigate(['/infocenter/details/' + item.id]);
  }

}
