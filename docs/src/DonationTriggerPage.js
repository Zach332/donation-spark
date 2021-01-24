import React, {useEffect} from 'react'
import EmptyStar from './starempty.svg'
import FullStar from './starfull.svg'
import { Link, useParams } from 'react-router-dom';

export default function DonationTrigger() {
    const [donationTrigger, setDonationTrigger] = React.useState({})
    let params = useParams();

    useEffect(() => {
        axios.get("/api/triggers/" + params.id).then((response) => {
            setDonationTrigger(response.data);
        });
    }, []);

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
                </div>
            </div>
        </div>
    )
}
