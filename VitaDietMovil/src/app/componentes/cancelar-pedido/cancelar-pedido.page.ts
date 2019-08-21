import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cancelar-pedido',
  templateUrl: './cancelar-pedido.page.html',
  styleUrls: ['./cancelar-pedido.page.scss'],
})
export class CancelarPedidoPage implements OnInit {
  
  orders;
  salida: Array<any>;
  order;
  constructor(private store: AuthService) { 
    this.getOrders();
    
  }

  ngOnInit() {
    
  }

  getOrders(){
    this.orders = this.store.obtenerPedidos().subscribe(
      res => {
        this.salida = res;
        console.log(res);
      });
  }

  getOrder(id: string){
    this.store.obtenerPedido(id).subscribe(res => {
      this.order = res;
      console.log(this.order);
    });
  }

  removeOrder(id: string){
    this.store.removerPedido(id);
    console.log("eliminado");
  }

}
