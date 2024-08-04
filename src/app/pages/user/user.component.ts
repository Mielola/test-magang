import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://63ef393fc59531ccf16b23ed.mockapi.io/user/${userId}`)
      .subscribe(data => {
        this.users = data;
      });
  }
}
