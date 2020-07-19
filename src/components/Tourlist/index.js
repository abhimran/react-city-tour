import React, { Component } from 'react'
import Tour from '../Tour'
import './tourlist.css';
import {tourData} from '../../tourData';

export default class TourList extends Component {
    state =  {
        tours: tourData
    }
    removeTour = id =>{
        const {tours} = this.state;
        const DeleteTour = tours.filter((tour) => tour.id !== id);
        this.setState({
          tours: DeleteTour
        });
    }
    render() {
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {
                     tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour = {this.removeTour}></Tour>))   
                }
            </section>
        )
    }
}
