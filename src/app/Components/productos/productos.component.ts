import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenDetallesService } from '../../services/orden-detalles.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{

  constructor(private service:OrdenDetallesService){ }
  cocheData:any;
  ngOnInit(): void {
    this.cocheData= this.service.cocheDetalle;
    
  }

}
