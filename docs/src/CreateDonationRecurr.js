import React from 'react'
import { Link } from 'react-router-dom';

export default function CreateDonationRecurr( {donationTrigger} ) {

    let donationContent;

    if (donationTrigger.type == "tweet") {
        donationContent = (
            <h2>Donate Everytime {donationTrigger.user} mentions {donationTrigger.keyword}</h2>
        );
    } else if (donationTrigger.type == "stock") {
        donationContent = (
            <h2>Donate Everytime {donationTrigger.ticker} increases {donationTrigger.percentChangeRequired} percernt</h2>
        );
    }
    
    return (
        <div> {/*TODO: CHANGE VARIABLE SUBSTUFF*/}
            {donationContent}
            <div class="mb-3">
                <label className="form-label">Donation Amount</label>
                <input className="form-control" type="number" min="1" step="any" placeholder="Enter Amount Here" aria-label="default input example"></input>
            </div>
            <div class="mb-3">
                <label className="form-label">Maximum Donation per Month</label>
                <input className="form-control" type="number" min="1" step="any" placeholder="Enter Amount Here" aria-label="default input example"></input>
            </div>
            <div class="mb-3">
                <label className="form-label">Donate To</label>
                <select className="form-select" aria-label="Default select example">
                    <option value="1">Malaria Consortium</option>
                    <option value="2">Helen Keller International</option>
                    <option value="3">New Incentives</option>
                    <option value="4">SCI Foundation</option>
                    <option value="5">GiveDirectly</option>
                </select>
            </div>
            <div class="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add Event</button>
            </div>
        </div>
    )
}