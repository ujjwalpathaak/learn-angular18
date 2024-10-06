import { Component, inject, OnInit } from "@angular/core";
import { Client } from "../model/class/client";
import { FormsModule } from "@angular/forms";
import { ClientService } from "../services/client.service";
import { IAPIResponse } from "../model/interface/response";
import { LoaderComponent } from "../components/loader/loader.component";

@Component({
  selector: "app-client",
  standalone: true,
  imports: [FormsModule, LoaderComponent],
  templateUrl: "./client.component.html",
  styleUrl: "./client.component.css",
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  isLoaded: boolean = false;

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((response: IAPIResponse) => {
      this.clientList = response.data;
      this.isLoaded = true;
    });
  }

  onSaveClient() {
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((response: IAPIResponse) => {
        if (response.result) {
          alert("Client added successfully");
        } else {
          alert(response.message);
        }
        this.getAllClients();
      });
  }

  onDeleteClient(clientId: number) {
    this.clientService
      .deleteClient(clientId)
      .subscribe((response: IAPIResponse) => {
        if (response.result == false) {
          alert(response.message);
        } else {
          alert("Client deleted successfully");
        }
        this.getAllClients();
      });
  }

  onEditClient(client: Client) {
    this.clientObj = client;
  }
}
