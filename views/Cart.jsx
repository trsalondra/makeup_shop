const React = require('react')
const DefaultLayout = require('./Default')

class Cart extends React.Component {
    render() {
        return(
            <DefaultLayout title={'Browse Products'}>
                welcome your cart
            </DefaultLayout>    
        )
    }
}

module.exports = Cart