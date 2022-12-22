const React = require('react')
const DefaultLayout = require('./Default')

class Home extends React.Component {
    render() {

        return (
            <DefaultLayout title={"home page"}>
                <p>
                Welcome to Beauty Vault! We are so glad you found us and we hope you enjoy browsing through our selection of trendy makeup products. At Beauty Vault, we are committed to providing our customers with the best in beauty, from the hottest brands to the latest trends and techniques.
                </p>

                <p>
                Whether you are a makeup artist looking for professional-grade products or a beauty enthusiast seeking the perfect finishing touch for your look, we have something for everyone. Our team of experts is here to help you find the products that best suit your needs and preferences, so don't hesitate to reach out to us with any questions or concerns.
                </p>

                <p>
                We hope you have a fantastic shopping experience with us and we look forward to helping you elevate your beauty routine. Thank you for choosing Beauty Vault!
                </p>

                <img src="https://cld.accentuate.io/556259082327/1643031372168/Website-Tutorial-Photos-FebruaryQuadTwo-LookTwo-thumbnail.jpg?v=0&options=w_800" alt="" />
                <img src="https://cld.accentuate.io/556258951255/1643030180927/Website-Tutorial-Photos-FebruaryQuadTwo-LookOne-thumbnail.jpg?v=0&options=w_800" alt="" />
                <img src="https://cld.accentuate.io/556258820183/1643028424583/Website-TutorialPhotos-FebruaryQuadOne-LookTwo-thumbnail.jpg?v=0&options=w_800" alt="" />
            </DefaultLayout>
        )
    }
}
module.exports = Home