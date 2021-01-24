import React from 'react'

export default function CreateDonationRecurr( {donationTrigger} ) {

    donationTrigger = {
        title: "Elon Musk Tweets",
        type: "tweet",
        user: "testuser",
        keyword: "testkeyword",
        description: "Wheveer ckclmnkdec cw c cc d sd cd cds asd cac dd csad c cad csa cd dc sdc asdc sc cd sca dacs dac dsad c ds ad dsc cd asc",
        stars: 13909,
        image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80417419/industry/telecom/telecom-news/elon-musk-targets-telecom-for-next-disruption-with-starlink-internet/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg"
    }

    let donationContent;

    if (donationTrigger.type == "tweet") {
        donationContent = (
            <h2>Donate when {donationTrigger.user} mentions {donationTrigger.keyword}</h2>
        );
    } else if (donationTrigger.type == "stock") {
        donationContent = (
            <h2>Donate when {donationTrigger.ticker} increases {donationTrigger.percentChangeRequired} percernt</h2>
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
                <button type="submit" className="btn btn-primary mb-3">Follow Donation Event</button>
            </div>
        </div>
    )
}