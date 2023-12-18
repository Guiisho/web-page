import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrdenDetallesService } from '../../services/orden-detalles.service';

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos-page.component.html',
  styleUrl: './productos-page.component.css'
})
export class ProductosPageComponent implements OnInit {
  
  constructor(private param:ActivatedRoute, private service:OrdenDetallesService) {}
  getProductoId:any;
  productoData:any;
  ngOnInit(): void {
    this.getProductoId= this.param.snapshot.paramMap.get('id');
    console.log(this.getProductoId,'getproducto');
    if(this.getProductoId){
      this.productoData= this.service.cocheDetalle.filter((value)=>{
        return value.id== this.getProductoId;
      })
    }
  }

}
