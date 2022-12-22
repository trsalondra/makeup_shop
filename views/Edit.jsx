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
                    <input type="submit" name='' value="submit changes" />
            </form>                
            </DefaultLayout>
        )
    }
}

module.exports = Edit