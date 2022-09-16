import{Component, OnInit, OnDestroy} from "@angular/core";
import {DateStorageService} from "../shared/date-storage.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component ({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class headerComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DateStorageService, private authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
