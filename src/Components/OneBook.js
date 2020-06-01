import React, { Component } from 'react'
import '../App.css'
import Modal from './Modal';
export default class OneBook extends Component {
   
    render() {
        
        return (
        <div>
                <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={this.props.myBook.cover} alt="Avatar" style={{width:300, height:400}}/>
            </div>
            <div className="flip-card-back">
                <h3>{this.props.myBook.title}</h3>
                <p>{this.props.myBook.description}</p>
                <p>{this.props.myBook.language}</p>
                           
                <Modal myPicture = {this.props.myBook.details}/>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
