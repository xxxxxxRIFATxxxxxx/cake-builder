import React, { Component } from 'react';
import Alert from '../Alert/Alert';
import { Formik } from 'formik';
import axios from 'axios';

class OrderForm extends Component {
    state = {
        submited: false
    };

    render() {
        document.title = "Cake - Order";
        const { submited } = this.state;
        return (
            <section className="container center" >
                <h5 className="display-5 text-center text-shadow">Order</h5>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="card bg-dark box-shadow box-rounded">
                            <div className="card-body card-padding">
                                {submited ? <Alert message="Order placed successfully" /> : <Formik
                                    initialValues={
                                        {
                                            name: "",
                                            phone: "",
                                            address: ""
                                        }
                                    }

                                    onSubmit={
                                        (values, { resetForm }) => {
                                            const order = {
                                                name: values.name,
                                                phone: values.phone,
                                                address: values.address,
                                                orderTime: new Date()
                                            };

                                            axios.post("https://cake-builder-6e48f-default-rtdb.firebaseio.com/orders.json", order)
                                                .then(response => {
                                                    resetForm();
                                                    this.setState({
                                                        submited: true
                                                    });
                                                    setTimeout(() => {
                                                        this.setState({
                                                            submited: false
                                                        });
                                                    }, 5000)
                                                    return response;
                                                })
                                                .catch(err => err);
                                        }
                                    }
                                >

                                    {({ values, handleChange, handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    className="form-control bg-dark text-light"
                                                    required />
                                            </div>

                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    className="form-control bg-dark text-light"
                                                    required />
                                            </div>

                                            <div className="mb-3">
                                                <textarea
                                                    name="address"
                                                    className="form-control bg-dark text-light"
                                                    cols="30"
                                                    rows="3"
                                                    placeholder="Address"
                                                    value={values.address}
                                                    onChange={handleChange}
                                                    required>
                                                </textarea>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-danger" type="submit">Place Order</button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>}
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </section >
        );
    };
};

export default OrderForm;


