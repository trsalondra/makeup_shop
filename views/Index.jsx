const React = require('react')
const DefaultLayout = require('./Default')
const { render } = require('react-dom')

class Index extends React.Component {
    render() {
        const { products } = this.props
        return (
            <DefaultLayout title={'all products'}>
                {/* <link rel="stylesheet" type="text/css" href="../css/index.css"/> */}
                <div>
                    <h1>See All Makeup</h1>
                    <ul>
                        {this.props.products.map((product, i) => {
                            return <li><a href={`/products/${product.id}`}>{product.displayName}</a></li>
                        })}
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index