import React from 'react'
import EmptyStar from './starempty.svg'

export default function DonationTrigger( {donationTrigger} ) {
    return (
        <div style={{width: 300, height: 450, backgroundColor:"#ECDDD9"}} class="card m-2">
            <img src={donationTrigger.image} class="card-img-top m-1" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{donationTrigger.title}</h5>
                <p class="card-text">{donationTrigger.description}</p>
                <div className="d-flex align-items-center">
                    <button class="btn btn-primary me-auto">Follow</button>
                    <div>
                        {donationTrigger.stars}
                    </div>
                    <img
                        src={EmptyStar}
                        className="ms-1"
                        style={{ width: 30}}
                    />
                </div>
            </div>
        </div>
    )
}
