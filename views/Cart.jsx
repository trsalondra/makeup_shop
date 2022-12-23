const React = require('react')
const DefaultLayout = require('./Default')

class Cart extends React.Component {
    render() {
        const { products } = this.props
        return (
            <DefaultLayout>
                <div>
                    <ul style={{ listStyleType: 'none' }}>
                        {this.props.products.map((product, i) => {
                            return <li style={{ margin: '28px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* product image */}
                                    <a href={`/products/${product.id}`}>
                                        <img style={{ height: "200px" }} src={product.imageLink} alt="" />
                                    </a>

                                    <div>
                                        {/* product name */}
                                        <a style={{ textDecoration: 'none', color: 'black', fontSize: '18px', marginBottom: '18px' }} href={`/products/${product.id}`}>
                                            {product.displayName} {product.subCategory}
                                        </a>

                                        {/* product price */}
                                        <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>
                                            ${product.price}
                                        </p>

                                        {/* button to increment and decrement quantity of product in cart */}
                                        <div style={{ display: 'flex', border: '2px solid rgb(158, 0, 89)', width: '80px', marginTop: '8px' }}>
                                            <button style={{ width: '40px', backgroundColor: 'rgb(255, 255, 252)', color: 'rgb(158, 0, 89)', border: '0px' }}>-</button>
                                            {/* product quantity in cart*/}
                                            <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>
                                                {product.inCart}
                                            </p>
                                            <button style={{ width: '40px', backgroundColor: 'rgb(255, 255, 252)', color: 'rgb(158, 0, 89)', border: '0px' }}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Cart