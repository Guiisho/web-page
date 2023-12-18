import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdenDetallesService } from '../../services/orden-detalles.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service:OrdenDetallesService) { }

  cocheData: any;

  ngOnInit(): void {
    this.cocheData= this.service.cocheDetalle;
  }

}
