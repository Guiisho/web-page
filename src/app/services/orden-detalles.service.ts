import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenDetallesService {

  constructor() { }

  cocheDetalle=[{
    id:1,
    cocheNombre:"Lamborgini",
    cocheDetalle:"Naranja",
    cochePrecio:62300,
    cocheImagen:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXV0b3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id:2,
    cocheNombre:"MClaren",
    cocheDetalle:"Gris",
    cochePrecio:30000,
    cocheImagen:"https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF1dG9zfGVufDB8fDB8fHww"
  },
  {
    id:3,
    cocheNombre:"Audi",
    cocheDetalle:"Gris",
    cochePrecio:14500,
    cocheImagen:"https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF1dG9zfGVufDB8fDB8fHww"
  },
  {
    id:4,
    cocheNombre:"Porche",
    cocheDetallle:"Rojo",
    cochePrecio:18000,
    cocheImagen:"https://images.unsplash.com/photo-1588258219511-64eb629cb833?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGF1dG9zfGVufDB8fDB8fHww"
  },
  {
    id:5,
    cocheNombre:"Mercedes",
    cocheDetallle:"Negro",
    cochePrecio:22300,
    cocheImagen:"https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dG9zfGVufDB8fDB8fHww"
  },
  {
    id:6,
    cocheNombre:"Ferrari",
    cocheDetallle:"Rojo",
    cochePrecio:50000,
    cocheImagen:"https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxhdXRvc3xlbnwwfHwwfHx8MA%3D%3D"
  }
]
  
}
