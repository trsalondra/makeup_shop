const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Beauty Vault</title>
                </head>
                <body style={{ margin: '0', color: 'rgb(158, 0, 89)', backgroundColor: 'rgb(255, 255, 252)'}}>
                    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'system-ui', fontSize: '15px', height: '50px' }}>
                        <div style={{ width: '30%' }}>
                            <ul style={{ display: 'flex', margin: '0', padding: '0', listStyleType: 'none' }}>
                                <li style={{ padding: '8px' }}><a style={{ textDecoration: 'none', color: 'black' }} href='/products'>SHOP</a></li>
                                <li style={{ padding: '8px' }}><a style={{ textDecoration: 'none', color: 'black' }} href='/products/collections/eyes'>EYES</a></li>
                                <li style={{ padding: '8px' }}><a style={{ textDecoration: 'none', color: 'black' }} href='/products/collections/face'>FACE</a></li>
                                <li style={{ padding: '8px' }}><a style={{ textDecoration: 'none', color: 'black' }} href='/products/collections/lips'>LIPS</a></li>
                                <li style={{ padding: '8px' }}><a style={{ textDecoration: 'none', color: 'black' }} href='/products/collections/palettes'>PALETTES</a> </li>
                                <li style={{ padding: '8px' }}><a style={{ textDecoration: 'none', color: 'black' }} href='/products/collections/tools'>TOOLS</a> </li>
                            </ul>
                        </div>
                        <a style={{ position: 'absolute', left: '50%', padding: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', color: 'rgb(158, 0, 89)', fontFamily: '"Gill Sans", sans-serif' }} href='/'>Beauty Vault</a>
                        <div style={{ padding: '8px' }}>
                            <a style={{ padding: '8px', color: 'black' }} href='/products/new'>Create New Product</a>
                            <a style={{ padding: '8px', textDecoration: 'none', color: 'black' }} href='/cart'>CART</a>
                        </div>
                    </nav>

                    <hr style={{ marginBottom: '30px'}}/>

                    <div style={{ width: '1000px', margin: 'auto'}}>
                        {this.props.children}
                    </div>

                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout