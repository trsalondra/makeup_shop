
const React = require('react')
const DefaultLayout = require('./Default')

class Cart extends React.Component {
    render() {
        const { products } = this.props
        let total = 0
        return (
            <DefaultLayout>
                <div style={{ diplay: 'flex'}}>
                    {/* left */}
                    <div>
                        <ul style={{ listStyleType: 'none' }}>
                            {this.props.products.map((product, i) => {
                                {/* product price */ }
                                total += product.price * product.inCart

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
                                                ${product.price} x {product.inCart} units
                                            </p>

                                            {/* product sub total */}
                                            <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>
                                                Product Subtotal ${product.price * product.inCart}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>

                    {/* right */}
                    <div>
                        {/* cart total */}
                        <p style={{ fontFamily: 'system-ui', fontSize: '24px', color: 'black' }}>
                            Order Total ${total.toFixed(2)}
                        </p>
                    </div>
                </div>


            </DefaultLayout>
        )
    }
}

module.exports = Cart