const React = require('react')
const DefaultLayout = require('./Default')

class Edit extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout>
                {/* <form action={`/products/${this.props.product._id}?_method=PUT`} method='POST'>
                    Product Name: <input type="text" name="displayName" defaultValue={this.props.product.displayName} /><br />
                    Description: <input type="text" name="description" defaultValue={this.props.product.description} /><br />
                    Image Link: <input type="text" name="imageLink" defaultValue={this.props.product.imageLink} /><br />
                    Category: <input type="text" name="category" defaultValue={this.props.product.category} /><br />
                    Subcategory <input type="text" name="subCategory" defaultValue={this.props.product.subCategory} /><br />
                    Price: <input type="number" name="price" defaultValue={this.props.product.price} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue={this.props.product.quantity} /><br />
                    <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '200px', marginTop: '8px'}} type="submit" name='' value="submit changes" />
            </form>                 */}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <form action={`/products/${this.props.product._id}?_method=PUT`} method='POST'>
                        <h1>Do you see a mistake? {<br />} Correct it!</h1>
                        Product Name: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="displayName" defaultValue={this.props.product.displayName} /><br />
                        Description: <br /><input style={{ marginBottom: '18px', width: '250px', height: '50px' }} type="text" name="description" defaultValue={this.props.product.description} /><br />
                        Image Link: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="imageLink" defaultValue={this.props.product.imageLink} /><br />
                        Category: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="category" defaultValue={this.props.product.category} /><br />
                        Subcategory <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="subCategory" defaultValue={this.props.product.subCategory} /><br />
                        Price: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="price" defaultValue={this.props.product.price} /><br />
                        Quantity: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="number" name="quantity" defaultValue={this.props.product.quantity} /><br />
                        <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '120px', marginBottom: '18px' }} type="submit" name='' value="submit changes" />
                    </form>

                    <img style={{ width: '650px' }} src="https://cld.accentuate.io/556259082327/1643031372168/Website-Tutorial-Photos-FebruaryQuadTwo-LookTwo-thumbnail.jpg?v=0&options=w_800" alt="illustration of eyes with makeup" />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit