import { Component, inject, OnInit } from "@angular/core";
import { MasterService } from "../../services/master.service";
import { IDesignations } from "../../model/interface/designations";
import { IAPIResponse } from "../../model/interface/response";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: "app-designation",
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: "./designation.component.html",
  styleUrl: "./designation.component.css",
})
export class DesignationComponent implements OnInit {
  designations: IDesignations[] = [];
  isLoaded: boolean = false;
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (res: IAPIResponse) => {
        this.designations = res.data;
        this.isLoaded = true;
      },
      (error) => alert("Error in fetching data")
    );
  }
}
