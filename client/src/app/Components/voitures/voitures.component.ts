import { Component } from '@angular/core';
import { Ivoiture } from './voiture';
import {SelectItem} from 'primeng/api';
import { VoituresService } from 'src/app/Services/voitures.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent {

  sortOptions: SelectItem[] = [];

  sortOrder =-1 ;

  sortField = "";
  sortKey = ";"

  public products: Ivoiture[] = [];

   constructor(private voituresService: VoituresService) {}




   ngOnInit(){
this.getCars();
    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

   }
   onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

   getCars(): void {
    this.voituresService.getAllcars()
      .subscribe(
        async (data: any) => {
          this.products = data.voitures;
        console.log("data", data);

        },
        (error:any) => {
          console.error(error);
        });
  }


}

