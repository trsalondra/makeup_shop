const React = require('react')
const DefaultLayout = require('./Default')

class Edit extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title={"edit product form"}>
            <form action={`/products/${this.props.product._id}?_method=PUT`} method='POST'>
                    Product Name: <input type="text" name="displayName" defaultValue={this.props.product.displayName} /><br />
                    Description: <input type="text" name="description" defaultValue={this.props.product.description} /><br />
                    Image Link: <input type="text" name="imageLink" defaultValue={this.props.product.imageLink} /><br />
                    Category: <input type="text" name="category" defaultValue={this.props.product.category} /><br />
                    Subcategory <input type="text" name="subCategory" defaultValue={this.props.product.subCategory} /><br />
                    Price: <input type="number" name="price" defaultValue={this.props.product.price} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue={this.props.product.quantity} /><br />
                    <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '200px', marginTop: '8px'}} type="submit" name='' value="submit changes" />
            </form>                
            </DefaultLayout>
        )
    }
}

module.exports = Edit