import { Component } from '@angular/core';
import { Ivoiture } from './voiture';
import { VoituresService } from 'src/app/Services/voitures.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent {

  public title = 'Liste des voitures';
  public voitures: Ivoiture[] = [

    {
      marque: 'Mercedes E Class',
      prix:30000 ,
      place:5,
      portiere:4,
      description:'Lorem ipsum dolor sit amet, has mundi mandamus adversarium ne. At eum regione suscipiantur. ',
      imageUrl:[
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/e9Bei_7p6uv2-2.ykVU44PGK.jpg?t=160557538753",
      "https://www.edmunds.com/assets/m/toyota/land-cruiser/2003/oem/2003_toyota_land-cruiser_4dr-suv_base_fq_oem_1_500.jpg",
      "https://m.media-amazon.com/images/I/51rtXlprBWL._AC_UF894,1000_QL80_.jpg"
    ]

    },
    {
      marque: 'Land Cruiser',
      prix:45000 ,
      place:7,
      portiere:4,
      description:'Lorem ipsum dolor sit amet, has mundi mandamus adversarium ne. At eum regione suscipiantur. ',
      imageUrl:[
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/e9Bei_7p6uv2-2.ykVU44PGK.jpg?t=160557538753",
      "https://www.edmunds.com/assets/m/toyota/land-cruiser/2003/oem/2003_toyota_land-cruiser_4dr-suv_base_fq_oem_1_500.jpg",
      "https://m.media-amazon.com/images/I/51rtXlprBWL._AC_UF894,1000_QL80_.jpg"
    ],

    },
    {
      marque: 'Fiat Fastback',
      prix:50000 ,
      place:5,
      portiere:4,
      description:'Lorem ipsum dolor sit amet, has mundi mandamus adversarium ne. At eum regione suscipiantur. ',
      imageUrl:[ "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/e9Bei_7p6uv2-2.ykVU44PGK.jpg?t=160557538753",
      "https://www.edmunds.com/assets/m/toyota/land-cruiser/2003/oem/2003_toyota_land-cruiser_4dr-suv_base_fq_oem_1_500.jpg",
      "https://m.media-amazon.com/images/I/51rtXlprBWL._AC_UF894,1000_QL80_.jpg"
    ]

    },
    {
      marque: 'Carina 3',
      prix:20000 ,
      place:5,
      portiere:4,
      description:'voiture luxieuse et spacieuse avec climatisation et sièges chauffant ',
      imageUrl:[
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/e9Bei_7p6uv2-2.ykVU44PGK.jpg?t=160557538753",
        "https://www.edmunds.com/assets/m/toyota/land-cruiser/2003/oem/2003_toyota_land-cruiser_4dr-suv_base_fq_oem_1_500.jpg",
        "https://m.media-amazon.com/images/I/51rtXlprBWL._AC_UF894,1000_QL80_.jpg"
      ]
    }
   ];

   private _filtre = "mot";
   public filtreVoiture: Ivoiture[] = [];

   constructor(private voituresService: VoituresService) {}




   ngOnInit(){
    //this.filtreVoiture = this.voitures
    this.getCars();
   }

   getCars(): void {
    this.voituresService.getAllcars()
      .subscribe(
        async (data: any) => {
          this.filtreVoiture = data.voitures;
        console.log("data", data);

        },
        (error:any) => {
          console.error(error);
        });
  }

   public get filtre():string{
    return this._filtre;
   }
   public set filtre(filter:string){
    this._filtre = filter;
    this.filtreVoiture = this.filtre ? this.filteVoiture(this.filtre): this.voitures;
   }

   private filteVoiture(critere:string):Ivoiture[]{
    critere = critere.toLocaleLowerCase();

    const reponse  = this.voitures.filter(
      (voiture: Ivoiture)=> voiture.marque.toLocaleLowerCase().indexOf(critere) != -1
    );
    return reponse;
   }
}
