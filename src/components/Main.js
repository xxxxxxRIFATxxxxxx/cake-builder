import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Body from './Body/Body';
import CakeBuilder from './Body/CakeBuilder/CakeBuilder';
import Menu from './Body/Menu/Menu';
import Service from './Body/Service/Service';
import About from './Body/About/About';
import Contact from './Body/Contact/Contact';
import OrderForm from './Body/OrderForm/OrderForm';
import Footer from './Footer/Footer';

class Main extends Component {
    state = {
        items: {},
        slices: [],
        totalPrice: 0
    };

    addSlice = slice => {
        const { items, slices } = this.state;
        const workingSlices = [...slices];
        workingSlices.push(slice);

        this.setState((prevState) => {
            return {
                slices: workingSlices,
                totalPrice: prevState.totalPrice + items[slice]
            };
        });
    };

    removeSlice = slice => {
        const { items, slices } = this.state;
        const workingSlices = [...slices];
        const indexSlice = workingSlices.findIndex((sc) => sc === slice);
        if (indexSlice in workingSlices) {
            workingSlices.splice(indexSlice, 1);

            this.setState((prevState) => {
                return {
                    slices: workingSlices,
                    totalPrice: prevState.totalPrice - items[slice]
                };
            });
        }
    };

    componentDidMount() {
        axios.get("https://cake-builder-6e48f-default-rtdb.firebaseio.com/items.json")
            .then(response => response.data)
            .then(items => this.setState({ items: items }))
            .catch(err => console.log(err));
    };

    render() {
        const { items, slices, totalPrice } = this.state;
        return (
            <div>
                <Header />
                <Body>
                    <Switch>
                        <Route path="/" exact render={() => <CakeBuilder items={items} slices={slices} addSlice={this.addSlice} removeSlice={this.removeSlice} totalPrice={totalPrice} />} />
                        <Route path="/menu" exact render={() => <Menu />} />
                        <Route path="/service" exact render={() => <Service />} />
                        <Route path="/about" exact render={() => <About />} />
                        <Route path="/contact" exact render={() => <Contact />} />
                        <Route path="/order" exact render={() => <OrderForm />} />
                    </Switch>
                </Body>
                <Footer />
            </div>
        );
    };
};

export default Main;


