import React,{Component} from 'react';

export default class Products extends Component{

	render(){
		return (
			<React.Fragment>
				{this.generateProducts()}
			</React.Fragment>
		)
	}

	generateProducts = () =>{
		let Products = this.props.Products;

		return Products.map((product,index)=>{
				return (
					<div className="products" key={index}>
					<div className="left">

						{index+1}: {product.name}
						<br/>
						{product.price} INR
						<br/>
						{product.qty} 
						<button onClick={()=>{this.props.updateQty(index)}}>+</button>
						<button onClick={()=>{this.props.updateQty2(index)}}>-</button>
						<br/>
						<button>Buy Now</button>
					    <button onClick={()=>{this.props.deleteProduct(index)}}>X</button>						
					</div>
					<div className="right"> 
						<img align="right" src={"./images/"+product.img} alt="pic" height="100px"
						width="145px" />
					</div>
			</div>
				);
		});


	}
}