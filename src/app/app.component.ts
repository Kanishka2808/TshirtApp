import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showDetails=false;
  buyButton=false;
  tshirts: any=[];
  tshirtdetails:any;

  addtocart(t){
    this.tshirtdetails=t;
    this.showDetails=true;
    this.buyButton=true;
  }

  cancel(d){
    this.showDetails=false;
    this.buyButton=true;
  }

  update(d): void {
    console.log(d.Id);
    this.showDetails=false;
    this.buyButton=false;

  }
  constructor()
  {
   

  }
  
  ngOnInit()
  {
    this.tshirts=this.getTshirts();
    console.log(this.tshirts);
  }
//This function returns list of Tshirts
  getTshirts() {
    return  [
      {
        "id":1,
        "name": "Man white t-shirt",
        "productCode":"Man-0011",
        "releaseDate":"May-09-2019",
        "Price": 100.00,
        "fimage": "assets/images/t1front.jpg",
        "bimage": "assets/images/t1back.jpg",
        "details": "A white t-shirt for office going men",
        "color": "Blue"  ,
        "quantity": 30 ,
        "imggsrc": ''
      },
      {
        "id":2,
        "name": "Man red t-shirt",
        "productCode":"Man-0012",
        "releaseDate":"April-28-2019",
        "Price": 150.00,
        "fimage": "assets/images/t2front.jpg",
        "bimage": "assets/images/t2back.jpg",
        "details": "A red t-shirt for office going men",
        "color": "black" , 
        "quantity": 20 ,
        "imggsrc": ''
      },
      {
        "id":3,
        "name": "Man pink t-shirt",
        "productCode":"Man-0013",
        "releaseDate":"September-05-2019",
        "Price": 400.00,
        "fimage": "assets/images/t3front.jpg",
        "bimage": "assets/images/t3back.jpg",
        "details": "A pink t-shirt for office going men",
        "color": "grey" , 
        "quantity": 50 ,
        "imggsrc": ''
      }
      
    ]

  }
}