import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { OfertasComponent } from './Components/ofertas/ofertas.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { ProductosPageComponent } from './Components/productos-page/productos-page.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "footer", component: FooterComponent},
    {path: "productos", component: ProductosComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "ofertas", component: OfertasComponent},
    {path: "nosotros", component: NosotrosComponent},
    {path: "productos/:id", component:ProductosPageComponent},
    {path:"**", redirectTo:"home"}
    
];
