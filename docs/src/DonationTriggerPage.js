import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Spinner from "./Spinner";


export default function DonationTrigger() {
    const [donationTrigger, setDonationTrigger] = React.useState({})
    const [status, setStatus] = React.useState("loading")
    let params = useParams();

    useEffect(() => {
        axios.get("https://donation-spark.ue.r.appspot.com/api/triggers/" + params.id).then((response) => {
            setDonationTrigger(response.data);
        }).then(() => {
            setStatus("loaded") 
        });
    }, []);

    if(status === "loading") {
        return <Spinner />
    }

    var additionalFields;
    if(donationTrigger.type === "StockPriceChangeTrigger") {
        additionalFields = (
            <p className="p-1" style={{backgroundColor:"#ECDDD9"}}>Percent stock change on the most recent trading day: {donationTrigger.mostRecentPriceChange}</p>
        )
    }

    var donationEvent;
    if(donationTrigger.type === "StockPriceChangeTrigger") {
        donationEvent = (
            <p>You will donate whenever <b>{donationTrigger.ticker}</b> increases by <b>{donationTrigger.percentChangeRequired}</b>%</p>
        )
    } else if(donationTrigger.type === "KeywordTrigger") {
        donationEvent = (
            <p>You will donate whenever <b>{donationTrigger.username}</b> sends a Tweet containing the keyword <b>{donationTrigger.keywordRequired}</b></p>
        )
    }

    return (
        <div style={{width: "80%", height: "100%"}} class="card m-2 mx-auto">
            <img src={donationTrigger.image} style={{width:"50%", height:"50%"}} class="card-img-top p-1 mx-auto" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{donationTrigger.title}</h5>
                <p class="card-text">{donationTrigger.description}</p>
                {additionalFields}
                <div className="d-flex align-items-center mb-2">
                    <button class="btn btn-outline-info me-auto">
                        <Link to={"/follow-donation-event/"+ donationTrigger.id} className="text-decoration-none">Follow</Link>
                    </button>
                </div>
                {donationEvent}
            </div>
        </div>
    )
}
