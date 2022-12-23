const React = require('react')
const DefaultLayout = require('./Default')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <form action='/products' method='POST'>
                        <h1>Don't see what you need? {<br />} Create it!</h1>
                        Product Name: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="displayName" /><br />

                        Description: <br /><input style={{ marginBottom: '18px', width: '250px', height: '50px' }} type="text" name="description" /><br />

                        Image Link: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="imageLink" /><br />

                        Category: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="category" /><br />

                        Subcategory <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="subCategory" /><br />

                        Price: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="text" name="price" /><br />

                        Quantity: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="number" name="quantity" /><br />
                        <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '80px', marginBottom: '18px' }} type="submit" name='' value="submit" />

                        In Cart: <br /><input style={{ marginBottom: '18px', width: '250px' }} type="number" name="inCart" /><br />
                        <input style={{ padding: '8px', fontFamily: 'system-ui', fontSize: '12px', backgroundColor: 'rgb(255, 255, 252)', border: '2px solid rgb(158, 0, 89)', color: 'rgb(158, 0, 89)', width: '80px', marginBottom: '18px' }} type="submit" name='' value="submit" />
                    </form>

                    <img style={{ width: '650px' }} src="https://cld.accentuate.io/556258951255/1643030180927/Website-Tutorial-Photos-FebruaryQuadTwo-LookOne-thumbnail.jpg?v=0&options=w_800" alt="illustration of eyes with makeup" />
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New