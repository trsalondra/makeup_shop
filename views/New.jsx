const React = require('react')
const DefaultLayout = require('./Default')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={'new product form'}>
            <div>
                <form action='/products' method='POST'>
                    Product Name: <input type="text" name="displayName" /><br />
                    Description: <input type="text" name="description" /><br />
                    Image Link: <input type="text" name="imageLink" /><br />
                    Category: <input type="text" name="category" /><br />
                    Subcategory <input type="text" name="subCategory" /><br />
                    Price: <input type="text" name="price" /><br />
                    Quantity: <input type="number" name="quantity" /><br />
                    <input type="submit" name='' value="submit" />
                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = New