import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerName: string = 'Dashboard'

  constructor(private router: Router,){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.updateHeader()
      }
    })
  }

  ngOnInit(): void {
      this.updateHeader()
  }

  updateHeader() {
    const url = this.router.url
    if (url === '/dashboard'){
      this.headerName = 'Dashboard'
      }
      else if (url === '/dashboard/user/1'){
        this.headerName = 'Dashboard User'
        }
        else if (url === '/dashboard/table'){
          this.headerName = 'Dashboard Table'
          }
  }
}
