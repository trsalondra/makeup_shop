const React = require('react')
const DefaultLayout = require('./Default')

class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout>
                <a style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }} href={`/products/collections/${this.props.product.category}`}>Return to {this.props.product.category[0].toUpperCase(0) + this.props.product.category.toLowerCase().slice(1)}</a>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ color: 'black', width: '450px' }}>
                        <h1 style={{ fontSize: '50px', margin: '0px' }}>{this.props.product.displayName}</h1>
                        <p style={{ fontFamily: 'system-ui', fontSize: '12px', color: 'rgb(158, 0, 89)' }}>Currently In Stock: {this.props.product.quantity}</p>

                        <p style={{ fontFamily: 'system-ui' }}>{this.props.product.description}</p>

                        <a href='/cart'><button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(158, 0, 89)', border: '2px solid rgb(158, 0, 89)', color: 'white', width: '200px', marginTop: '8px' }} >ADD TO CART ${product.price}</button></a>
                        <br />

                        <a href={`/products/${product._id}/edit`}><button style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '80px', marginTop: '8px' }}>Edit</button></a>
                        <br />

                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                            <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '80px', marginTop: '8px' }} type="submit" value="Delete" />
                        </form>


                    </div>

                    <img style={{ width: '500px' }} src={this.props.product.imageLink} alt="" />
                </div>

            </DefaultLayout>
        )
    }
}

module.exports = Show