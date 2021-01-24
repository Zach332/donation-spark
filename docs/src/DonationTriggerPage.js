import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

export default function DonationTrigger() {
    const [donationTrigger, setDonationTrigger] = React.useState({})
    let params = useParams();

    useEffect(() => {
        axios.get("https://donation-spark.ue.r.appspot.com/api/triggers/" + params.id).then((response) => {
            setDonationTrigger(response.data);
        });
    }, []);

    return (
        <div style={{width: "80%", height: "100%", backgroundColor:"#ECDDD9"}} class="card m-2">
            <img src={donationTrigger.image} class="card-img-top p-1" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{donationTrigger.title}</h5>
                <p class="card-text">{donationTrigger.description}</p>
                <div className="d-flex align-items-center">
                    <button class="btn btn-outline-info me-auto">
                        <Link to="/follow-donation-event" className="text-decoration-none">Follow</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
