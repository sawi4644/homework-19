import React from 'react'
import '../../App.css'
import { Button } from '../Button/Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome to the Employee Directory</h1>
            <p>Here you can view all employees or search by category</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    View All
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
