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
                                    {/* product price */}
                                    {product.quantity === 0 ? <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>
                                        ${product.price} - OUT OF STOCK</p> :
                                        <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>
                                        ${product.price} - IN STOCK</p>
                                    }
                                    
                                    {/* product name */}
                                    <a style={{ textDecoration: 'none', color: 'black', fontSize: '18px', marginBottom: '18px' }} href={`/products/${product.id}`}>
                                        {product.displayName} {product.subCategory}
                                    </a>



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