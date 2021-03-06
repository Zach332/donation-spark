import React from 'react'
import axios from 'axios'
import CheckMark from "./check.svg";

export default function AddDonationEvent() {

    const [eventType, setEventType] = React.useState("tweet");
    const [trigger, setTrigger] = React.useState({})
    const [status, setStatus] = React.useState("notSubmitted")

    const options = (event) => {setEventType(event.target.value)};

    let selectedForm;

    const handleSubmit = (event) => {
        if(eventType === "tweet") {
            axios
                .post("https://donation-spark.ue.r.appspot.com/api/triggers/tweets", trigger)
                .then(() => {
                    setStatus("success")
                })
        } else {
            axios
                .post("https://donation-spark.ue.r.appspot.com/api/triggers/stocks", trigger)
                .then(() => {
                    setStatus("success")
                })
        }
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.id;
        setTrigger((trigger) => ({
            ...trigger,
            [name]: target.value,
        }));
        console.log(trigger)
    };

    if (eventType == "tweet") {
        selectedForm = (
            <div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Twitter Username</label>
                    <input class="form-control" onChange={handleInputChange} id="username" type="text" placeholder="Enter Twitter Username Here" aria-label="default input example"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Keyword</label>
                    <input class="form-control" onChange={handleInputChange} id="keywordRequired" type="text" placeholder="Enter Keyword Here" aria-label="default input example"></input>
                </div>
            </div>
        );
    } else if (eventType == "stock") {
        selectedForm = (
            <div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Stock Ticker</label>
                    <input class="form-control" onChange={handleInputChange} id="ticker" type="text" placeholder="Enter Stock Ticker Here" aria-label="default input example"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Stock Increase Percent</label>
                    <input class="form-control" onChange={handleInputChange} id="percentChangeRequired" type="number" min="1" step="any" placeholder="Enter Stock Percent Increase Here" aria-label="default input example"></input>
                </div>
            </div>
        );
    }

    if(status === "success") {
        return (
            <div>
                <img
                    src={CheckMark}
                    className="mx-auto d-block p-4"
                    alt="Successful login"
                />
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label">Type of event</label>
            <select className="form-select mb-5" aria-label="Default select example" onChange={options} value={eventType}>
                <option value="tweet">Tweet</option>
                <option value="stock">Stock Change</option>
            </select>
            {eventType === "tweet"?<p className="p-1" style={{backgroundColor:"#ECDDD9"}}>Spark a donation whenever a Twitter user creates a Tweet with a specific keyword</p>
                :<p className="p-1" style={{backgroundColor:"#ECDDD9"}}>Spark a donation whenever a stock increases by a specific % in a day</p>}
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input onChange={handleInputChange} id="title" className="form-control" type="text" placeholder="Enter Title Here" aria-label="default input example"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea onChange={handleInputChange} id="description" className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Link to image</label>
                <input onChange={handleInputChange} id="image" className="form-control" type="text" placeholder="Enter link here"></input>
            </div>
            {selectedForm}
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add Spark</button>
            </div>
        </form>
    )
}
