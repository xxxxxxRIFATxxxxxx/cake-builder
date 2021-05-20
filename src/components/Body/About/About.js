import React from 'react';

const About = () => {
    document.title = "Cake - About";
    return (
        <section className="container center">
            <h5 className="display-5 text-center text-shadow">About</h5>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card bg-dark box-shadow box-rounded">
                        <div className=" card-body card-padding">
                            <h6 className="card-title fs-4 pink">Who we are</h6>
                            <p className="card-text">We offer the best and tastiest ice cream on the market. We make ice
                            cream in almost all flavors. We are the best in the market for providing quality and
                            maximum low price ice cream. We will ensure you that our ice cream is the best quality
                            ice cream. We use high quality machines to make ice cream. With which many ice creams
                            can be made in a very short time. Which is why we never have a shortage of ice cream. We
                            can supply ice cream to the market on time. We also focus only on this one product. So
                            our product will be of good quality. We always try to give our customers good products
                                at low prices which is why we have a reputation in the market</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark box-shadow box-rounded">
                        <div className=" card-body card-padding">
                            <h6 className="card-title fs-4 pink">Why us</h6>
                            <p className="card-text">We have been making the best quality ice cream for about 10 years. We
                            offer ice cream as well as delivery, making customized ice cream. We carry ice cream
                            orders for various occasions. Every year our sales are much higher than other ice cream
                            suppliers in the market. So our sales are much higher every year as we supply better
                            products. And since the sale is more, we can supply ice cream to the customer at a much
                            lower price. We are always ready for our customer satisfaction. We have not received any
                            complaints from any customer since the beginning of the business. So we always ensure
                                improved service. We provide 24 hours service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;