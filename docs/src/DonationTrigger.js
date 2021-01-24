import React from 'react'

export default function DonationTrigger( {donationTrigger} ) {
    return (
            <div style={{width: 300, height: 450}} class="card m-2">
                <img src={donationTrigger.image} class="card-img-top m-1" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{donationTrigger.title}</h5>
                    <p class="card-text">{donationTrigger.description}</p>
                    <div className="d-flex align-items-center">
                        <button class="btn btn-primary me-auto">Follow</button>
                        <div>
                            {donationTrigger.stars}
                        </div>
                    </div>
                </div>
            </div>
    )
}
