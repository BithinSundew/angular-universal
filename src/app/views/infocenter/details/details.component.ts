import { Component, OnInit } from '@angular/core';
import {Title,Meta} from "@angular/platform-browser";
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
activeId:any;
albumDetails:any={};
constructor(private sharedService: SharedService,
  public router: Router,
  private titleService: Title,
  private meta: Meta,
  public activatedRoute: ActivatedRoute,
  private webService: WebService) {
    this.activeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.titleService.setTitle('View Details');
    this.meta.updateTag({ name: 'Ablum Details', content: 'Ablum Details' })
    this.meta.updateTag({ name: 'Ablum Details Description', content: 'Ablum Details Description' })
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {

    let url =`comments?id=${this.activeId}` ;
  this.webService.get(url).subscribe((response: any) => {
    //  this.spinnerService.hide();
    // if (response.status == 1) {
    this.albumDetails = response[0];
    // }

  }, (error:any) => {
    console.log('error', error);
  });
}

}
