import React from 'react'
import EmptyStar from './starempty.svg'
import FullStar from './starfull.svg'
import { Link } from 'react-router-dom';

export default function DonationTrigger( {donationTrigger, setStarred} ) {

    var triggerLink = "/#/event/" + donationTrigger.id;

    const clickStar = (event) => {
        setStarred(donationTrigger.id);
        event.preventDefault()
    }

    return (
        <a
            href={triggerLink}
            className="mx-auto list-group-item list-group-item-action m-1 rounded border"
            style={{width: 300, height:450, backgroundColor:"#ECDDD9"}}
        >
            <div style={{width: 270, height: 430, backgroundColor:"#ECDDD9"}} class="card list-group-item-action">
                <img src={donationTrigger.image} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{donationTrigger.title}</h5>
                    <p class="card-text">{donationTrigger.description}</p>
                    <div className="d-flex align-items-center align-self-baseline">
                        <button class="btn btn-outline-info me-auto">
                            <Link to="/follow-donation-event" className="text-decoration-none">Follow</Link>
                        </button>
                        <div>
                            {donationTrigger.stars.toLocaleString()}
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
        </a>
    )
}
