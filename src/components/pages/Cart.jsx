import React,{Component} from 'react';
import "../styles/cart.css";
import Products from "./Products";

export default class Cart extends Component{
	//members => variable,

	state = {
		products : [
			{name:"Smart Watch",price:"1200.00",qty:"0",img:"10.jpg"},
			{name:"Dream Phone Pink Cover",price:"200.00",qty:"0",img:"10.jpg"},
			{name:"Hero Bicycle",price:"5000.00",qty:"0",img:"7.jpg"},
			{name:"Redmi X1 Note",price:"10,000.00",qty:"0",img:"10.jpg"},
			{name:"LCD-QT 64inches HD TV",price:"50,0000.00",qty:"0",img:"10.jpg"},
		],
		pmax:9,
		pmin:1
	}


	//
	render(){ 
		return (
			<div id="cart-container">
				<h1>My Cart ({this.state.products.length}) </h1>
				<hr/>
				 <Products 
				 Products={this.state.products}
				 updateQty={this.incrementQty}
				 updateQty2={this.decrementQty}
				deleteProduct = {this.deleteItem}
				/>
			</div>
		)
	}

	//incrementQty
	incrementQty = (index) =>{
    //clone the Object
	var newProducts = [...this.state.products];

	if(newProducts[index].qty > this.state.pmax){
		
	window.alert("You cannot Buy more 10 Products at a time");
	
	}else{
		
	newProducts[index].qty++;
	this.setState({
		products:newProducts
	});
	}
	}  
	  
	  
	  
	//decrementQty  
	decrementQty = (index) =>{
		  //clone the Object
	var newProducts = [...this.state.products];

	if(newProducts[index].qty < this.state.pmin){
		
	window.alert("You Should Buy Atleast One Product");
	
	}else{
		
	newProducts[index].qty--;
	this.setState({
		products:newProducts
	});
  }  
	}
  
  
  //Delete item
deleteItem = (index) => {
   if(window.confirm("Are you sure ? to delete")){
	  var newProducts = [...this.state.products];
	     //console.log("delete Product of",index);
	          newProducts.splice(index,1);
	  
	       //newProducts[index].qty--;
	  
	      this.setState({
		products:newProducts  
	  });
    }
  }
}