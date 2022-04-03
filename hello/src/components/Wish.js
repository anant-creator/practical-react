import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Container } from 'react-bootstrap'


class Wish extends Component {
    render() {
        return (
            <section className='bg-light p-5'>
                <Container>
                    <h1 className='text-danger'>I Would love</h1>
                    <h1>To play with you</h1>
                </Container>
            </section> 
        )
    }
  }
// function Wish() {
//     return (
//         <section className='bg-light p-5'>
//             <Container>
//                 <h1 className='text-danger'>I Would love</h1>
//                 <h1>To play with you</h1>
//             </Container>
//         </section>
//     )
// }

export default Wish;