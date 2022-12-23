const React = require('react')
const DefaultLayout = require('./Default')
const { render } = require('react-dom')

class Index extends React.Component {
    render() {
        const { products } = this.props
        return (
            <DefaultLayout>
                <div>
                    <ul style={{ listStyleType: 'none', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr' }}>
                        {this.props.products.map((product, i) => {
                            return <li style={{ margin: '28px' }}>
                                <div style={{}}>

                                    {/* product image */}
                                    <a href={`/products/${product.id}`}>
                                        <img style={{ height: "200px" }} src={product.imageLink} alt="" />
                                    </a>

                                    <br />

                                    {/* product name */}
                                    <a style={{ textDecoration: 'none', color: 'black', fontSize: '18px', marginBottom: '18px' }} href={`/products/${product.id}`}>
                                        {product.displayName} {product.subCategory}
                                    </a>

                                    {/* product price */}
                                    <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>
                                        ${product.price}
                                    </p>

                                    {/* add to cart button or out of stock button*/}
                                    {product.quantity > 0 ? <a href='/cart'><button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '200px' }} >ADD TO CART</button></a> : <button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'grey', width: '200px' }} >OUT OF STOCK
                                    </button>}
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index