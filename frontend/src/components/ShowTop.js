import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'


export default class ShowTopArea extends Component {
    render() {
        return (
            <div className="row mx-3">
                <div className="col-md-4">
                ID de la tienda Y Área en Metros cuadrados
                </div>
                <div className="col-md-5">
                    <ul className="list-group">
                        {   
                            
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user.id} id={user.id} onDoubleClick={this.ondelete}>
                                    {user["id"] + " " + user["Store_Area"] }
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>

        )
    }

    state = { //Store ID ,Store_Area,Items_Available,Daily_Customer_Count,Store_Sales
        users: [],
        idStore: '',
        Store_Area: '',
        Items_Available: '',
        Daily_Customer_Count: '',
        Store_Sales: ''
    }
    async getTopVentas() {
        const res = await axios.get(backend.host + ':' + backend.port + '/topArea');
        this.setState({ users: res.data });
    }
    async componentDidMount() {
        await this.getTopVentas();
        console.log(this.state.users);
        console.log(this.state.users[0]["id"]);
    }

}
