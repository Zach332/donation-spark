import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ThankYou from './thanksfordonating.png'

export default function CreateDonationRecurr() {
    const [donationTrigger, setDonationTrigger] = React.useState({})
    const [status, setStatus] = React.useState("notSubmitted")
    let params = useParams();

    useEffect(() => {
        axios.get("https://donation-spark.ue.r.appspot.com/api/triggers/" + params.id).then((response) => {
            setDonationTrigger(response.data);
        })
    }, []);

    const handleSubmit = (event) => {
        setStatus("submitted")
        event.preventDefault();
    }

    let donationContent;

    if (donationTrigger.type == "KeywordTrigger") {
        donationContent = (
            <h2>Donate when {donationTrigger.username} mentions {donationTrigger.keywordRequired}</h2>
        );
    } else if (donationTrigger.type == "StockPriceChangeTrigger") {
        donationContent = (
            <h2>Donate when {donationTrigger.ticker} increases by {donationTrigger.percentChangeRequired}%</h2>
        );
    } else {
        donationContent = <h2>Donate for spark: {donationTrigger.title}</h2>
    }

    let thankYou;

    if(status === "submitted") {
        thankYou = (
            <img
                src={ThankYou}
                style={{width:"30%"}}
                className="mx-auto d-block"
            />
        )
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
                <button type="submit" onClick={handleSubmit} disabled={status==="submitted"} className="btn btn-primary mb-3">Follow Donation Event</button>
            </div>
            <div className="mx-auto d-block">
                {thankYou}
            </div>
        </div>
    )
}