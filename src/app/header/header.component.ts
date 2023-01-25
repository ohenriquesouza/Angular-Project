import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private dataStorageService: DataStorageService, public authService: AuthService){}
  onSave(){
    this.dataStorageService.storeRecipes().subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

  onFetch(){
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
}
