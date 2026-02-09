import { Component, inject } from '@angular/core';
import { UserAuthService } from '../../services/user-auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  userAuthService = inject(UserAuthService);
}
