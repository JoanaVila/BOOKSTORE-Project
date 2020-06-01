import React, { Component } from 'react'
import OneBook from './OneBook'
import {Navbar, Form, FormControl} from "react-bootstrap";
export default class Books extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            filtered: ""            
        }
    }
    
    componentDidMount() {
        fetch("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
        .then(res => res.json())
        .then(data => this.setState({books:data.books}))
    }
    handleChange = (e) => {
  
     this.setState({
      filtered: e.target.value
    });
  }
    render() {
        const searchParam = this.state.filtered.toLowerCase()
        return (
            <div>
                <Navbar>
                    <Navbar.Brand> <img src="/Images/BOOKSTORE_LOGO.jpg"
                        width = "80"
                        height = "80"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Form inline>
                    <FormControl id = "mySearch" type="text" placeholder="Search" className="mr-sm-2" onChange = {this.handleChange}/>
                    </Form>
                </Navbar>
            <div style = {{display: "flex", flexWrap: "wrap", justifyContent:"space-around", alignContent:"space-around"}}>{this.state.books.filter(el => el.title.toLowerCase().includes(searchParam) || el.description.toLowerCase().includes(searchParam)).map((book, index) => {
            return(<OneBook myBook = {book} key = {index}/>) 
        })} </div>
             
            </div>
        )
    }
}
