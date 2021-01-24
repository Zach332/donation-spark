import React from 'react'
import EmptyStar from './starempty.svg'
import FullStar from './starfull.svg'
import { Link } from 'react-router-dom';

export default function DonationTrigger( {donationTrigger, setStarred} ) {

    const clickStar = () => {
        setStarred(donationTrigger.title);
    }

    return (
        <div style={{width: 300, height: 450, backgroundColor:"#ECDDD9"}} class="card m-2">
            <img src={donationTrigger.image} class="card-img-top m-1" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{donationTrigger.title}</h5>
                <p class="card-text">{donationTrigger.description}</p>
                <div className="d-flex align-items-center">
                    <button class="btn btn-outline-info me-auto">
                        <Link to="/follow-donation-event" className="text-decoration-none">Follow</Link>
                    </button>
                    <div>
                        {donationTrigger.stars}
                    </div>
                    <img
                        src={donationTrigger.starred?FullStar:EmptyStar}
                        className="ms-1"
                        onClick={clickStar}
                        style={{ width: 20}}
                    />
                </div>
            </div>
        </div>
    )
}
