## **Angular Material Icons**
- **Lista de Ícones disponíveis do Angular Material:** 
[Angular Material Icons List](https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/)
---

## CommonModule necessita para uso do pipe.

## **API References:**

### **Sidenav**
- **Referência da API para o Sidenav do Angular Material**  
A documentação oficial fornece detalhes sobre como usar e customizar o componente de *Sidenav*. 
[Sidenav API Documentation](https://material.angular.io/components/sidenav/)

### **List**
- **Referência da API para o List do Angular Material**  
A documentação oficial descreve como usar o componente de *List* para exibir listas de itens em sua aplicação.  
[List API Documentation](https://material.angular.io/components/list/)

### **Card**
- **Referência da API para o Card do Angular Material**  
Aqui você encontra todos os detalhes sobre como implementar o componente de *Card* do Angular Material.
[Card API Documentation](https://v17.material.angular.io/components/card/api)

### **MatInput**
- **API reference for Angular Material form-field**
Aqui você encontra todos os detalhes sobre como implementar o componente de form field do Angular Material.
[MatInput API Documentation](https://material.angular.io/components/input/overview)]

# **Angular RouterModule: Navegação e Roteamento**
No Angular, o **RouterModule** é a ferramenta central para implementar navegação entre diferentes componentes e páginas da aplicação. Ele oferece uma maneira robusta de gerenciar rotas, permitindo que você crie uma navegação de página única (SPA) sem a necessidade de recarregar a página.

## **Componente `router-outlet`**
O **`router-outlet`** é um componente especial utilizado para indicar onde os componentes de uma rota devem ser carregados dentro de uma estrutura de layout. Ele serve como um **placeholder** para os componentes associados a cada rota.

### Como funciona:
- O **`router-outlet`** é inserido no template do componente principal, onde as views dos componentes de rota serão exibidas quando a URL da rota corresponder.
- É como uma "janela" onde o conteúdo de cada rota será renderizado.

### Exemplo de uso:
```html
<!-- Componente principal (app.component.html) -->
<div class="header">
  <!-- Links de navegação -->
  <a routerLink="/home">Home</a>
  <a routerLink="/about">Sobre</a>
</div>

<!-- Onde os componentes de cada rota serão carregados -->
<router-outlet></router-outlet>




