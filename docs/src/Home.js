import React from 'react'
import DonationTrigger from './DonationTrigger';
import axios from 'axios';
import AddDonationEvent from './AddDonationEvent';
import Modal from './Modal';

export default function Home() {

    const [availableDonations, setAvailableDonations] = React.useState([
        {
            title: "Elon Musk Tweets",
            description: "Wheveer ckclmnkdec cw c cc d sd cd cds asd cac dd csad c cad csa cd dc sdc asdc sc cd sca dacs dac dsad c ds ad dsc cd asc",
            stars: 13909,
            image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80417419/industry/telecom/telecom-news/elon-musk-targets-telecom-for-next-disruption-with-starlink-internet/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg"
        },
        {
            title: "Elon Musk Tweets2",
            description: "Wheveer ckclmnkdec cw c cc d sd cd cds asd cac dd csad c cad csa cd dc sdc asdc sc cd sca dacs dac dsad c ds ad dsc cd asc",
            stars: 13909,
            image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80417419/industry/telecom/telecom-news/elon-musk-targets-telecom-for-next-disruption-with-starlink-internet/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg"
        },
        {
            title: "Elon Musk Tweets3",
            description: "Wheveer ckclmnkdec cw c cc d sd cd cds asd cac dd csad c cad csa cd dc sdc asdc sc cd sca dacs dac dsad c ds ad dsc cd asc",
            stars: 13909,
            image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80417419/industry/telecom/telecom-news/elon-musk-targets-telecom-for-next-disruption-with-starlink-internet/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg"
        },
        {
            title: "Elon Musk Tweets4",
            description: "Wheveer ckclmnkdec cw c cc d sd cd cds asd cac dd csad c cad csa cd dc sdc asdc sc cd sca dacs dac dsad c ds ad dsc cd asc",
            stars: 13909,
            image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80417419/industry/telecom/telecom-news/elon-musk-targets-telecom-for-next-disruption-with-starlink-internet/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg"
        },
        {
            title: "Elon Musk Tweets5",
            description: "Wheveer ckclmnkdec cw c cc d sd cd cds asd cac dd csad c cad csa cd dc sdc asdc sc cd sca dacs dac dsad c ds ad dsc cd asc",
            stars: 13909,
            image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80417419/industry/telecom/telecom-news/elon-musk-targets-telecom-for-next-disruption-with-starlink-internet/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg"
        },
    ])

    React.useEffect(() => {
        axios
            .get("https://donation-spark.ue.r.appspot.com/api/triggers")
            .then((response) => {
                setAvailableDonations(response.data)
            });
    }, []);

    const setStarred = (id) => {
        setAvailableDonations(availableDonations.map((donation) => donation.title != id?donation:flipDonation(donation)))
    }

    const flipDonation = (donation) => {
        if(donation.starred) {
            return {
                ...donation,
                starred:false,
                stars:donation.stars-1
            }
        }
        return {
            ...donation,
            starred:true,
            stars:donation.stars+1
        }
    }


    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="me-auto p-2">
                    <h1>Home</h1>
                </div>
                <div className="p-2">
                    <a
                        type="btn btn-primary"
                        className="btn btn-outline-primary btn-md"
                        data-bs-toggle="modal"
                        data-bs-target={"#newTrigger"}
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-plus"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                            />
                        </svg>
                            Add donation event
                    </a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {availableDonations.map((donation) => (
                        <DonationTrigger key={donation.title} donationTrigger={donation} setStarred={setStarred} />
                    ))}
                </div>
            </div>
            <Modal
                id={"newTrigger"}
                title={"Add donation event"}
                body={<AddDonationEvent />}
            />
        </div>
    )
}
