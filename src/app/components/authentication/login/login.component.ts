import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document,
    private AuthenticationService: AuthenticationService,
    private router: Router) { }
    
  ngOnDestroy(): void {
    this.document.body.classList.remove('bg-gradient-primary');
  }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');
  }

  onLogin(form: any): void {
    console.log(form.value);
    this.AuthenticationService.login(form.value).subscribe(
      (res) => {
        localStorage.setItem('accessToken', JSON.parse(JSON.stringify(res)).accessToken);
        this.router.navigateByUrl('/inicio');
      }
    );
    
  }
}
