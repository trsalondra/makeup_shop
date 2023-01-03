const React = require('react')
const DefaultLayout = require('./Default')

class Show extends React.Component {
    render() {
        const { product } = this.props

        return (
            <DefaultLayout>
                {/* link to all products */}
                <a style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }} href={`/products`}>Browse All Beauty Products</a>
                <br />
                {/* link to single collection */}
                <a style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }} href={`/products/collections/${this.props.product.category}`}>Browse {this.props.product.category[0].toUpperCase(0) + this.props.product.category.toLowerCase().slice(1)} Products</a>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ color: 'black', width: '450px' }}>

                        {/* product name */}
                        <h1 style={{ fontSize: '50px', margin: '0px' }}>{this.props.product.displayName}</h1>

                        {/* product quantity */}
                        <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>${product.price} - In Stock: {this.props.product.quantity} units </p>

                        {/* product description */}
                        <p style={{ fontFamily: 'system-ui' }}>{this.props.product.description}</p>

                        {/* add to cart button */}

                        {product.quantity > 0 && product.inCart === 0 ?
                         <form action={`/products/${product.id}?_method=PUT`} method="POST" ><input type="submit" name="inCart" value="ADD TO CART" style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(158, 0, 89)', border: '2px solid rgb(158, 0, 89)', color: 'white', width: '200px' }}/></form>
                        : product.quantity === 0 ?
                        <button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'grey', width: '200px' }} >OUT OF STOCK</button>
                        :<div style={{display: 'flex'}}>
                            <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid rgb(158, 0, 88)', width: '90px' }}>
                            { product.inCart > 0 ? <form style={{ display: 'flex', justifyContent: 'center'}} action={`/products/${product.id}?_method=PUT`} method="POST" ><input type="submit" name="inCart" value="-" style={{ width: '40px', backgroundColor: 'rgb(255, 255, 252)', color: 'rgb(158, 0, 89)', border: '0px' }}/></form>: <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', color: 'grey', border: '0px', padding: '0px'}}>-</div>}
  
                            {/* product quantity in cart*/}
                            <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)', margin: 'auto' , display: 'flex', alignItems: 'center'}}>
                            {product.inCart}
                            </p>

                            { product.quantity > product.inCart ? <form style={{ display: 'flex', justifyContent: 'center'}} action={`/products/${product.id}?_method=PUT`} method="POST" ><input type="submit" name="inCart" value="+" style={{ width: '40px', backgroundColor: 'rgb(255, 255, 252)', color: 'rgb(158, 0, 89)', border: '0px' }}/></form>: <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', color: 'grey', border: '0px', padding: '0px'}}>+</div>}
                         </div>
                        
                        <a href='/cart'><button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(158, 0, 89)', border: '2px solid rgb(158, 0, 89)', color: 'white', width: '200px' }} >GO TO CART</button></a>
                        </div>
                        
                         
                         }
                                            
                        <br />

                        {/* edit button */}
                        <a href={`/products/${product._id}/edit`}><button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '80px', marginTop: '8px' }}>Edit</button></a>

                        {/* delete button */}
                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                            <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '80px', marginTop: '8px' }} type="submit" value="Delete" />
                        </form>
                    </div>

                    {/* product image */}
                    <img style={{ width: '500px' }} src={this.props.product.imageLink} alt="" />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show