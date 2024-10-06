import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { IRole } from "../../model/class/interface/roles";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "../../loader/loader.component";

@Component({
  selector: "app-roles",
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: "./roles.component.html",
  styleUrl: "./roles.component.css",
})
export class RolesComponent implements OnInit {
  firstName: string = "Angular Tutorial Name";
  version: number = 18;
  isLoaded: boolean = false;
  isActive: boolean = false;
  currentDate: Date = new Date();
  roleList: IRole[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
      .subscribe((response: any) => {
        this.roleList = response.data;
        this.isLoaded = true;
      });
  }

  showWelcomeAlert() {
    alert("Welcome to Angular Tutorial");
  }
  showMessage(message: string) {
    alert(message);
  }
}
