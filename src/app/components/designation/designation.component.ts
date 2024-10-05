import { Component, inject, OnInit } from "@angular/core";
import { MasterService } from "../../services/master.service";
import { IDesignations } from "../../model/class/interface/designations";

@Component({
  selector: "app-designation",
  standalone: true,
  imports: [],
  templateUrl: "./designation.component.html",
  styleUrl: "./designation.component.css",
})
export class DesignationComponent implements OnInit {
  designations: IDesignations[] = [];
  masterService = inject(MasterService);
  ngOnInit(): void {
    // this.designations = this.masterService.getDesignations();
  }
}
