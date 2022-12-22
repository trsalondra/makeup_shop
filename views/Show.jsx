const React = require('react')
const DefaultLayout = require('./Default')

class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title={"single product"}>
            <div>
                <img src={this.props.product.imageLink} alt="" />
                <h1>{this.props.product.displayName}</h1>
                <h2>${this.props.product.price}</h2>
                <p>{this.props.product.description}</p>

                <button><a href={`/products/${product._id}/edit`}>edit</a></button>
                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>
            </div>
            </DefaultLayout>

        )
    }
}

module.exports = Show