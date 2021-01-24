import React from 'react'
import axios from 'axios'

export default function AddDonationEvent() {

    const [eventType, setEventType] = React.useState("tweet");

    const options = (event) => {setEventType(event.target.value)};

    let selectedForm;

    const handleSubmit = (event) => {
        axios
            .post("/api/triggers", {
            })
            .then(() => {
            })
        event.preventDefault();
    }

    if (eventType == "tweet") {
        selectedForm = (
            <div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Twitter Username</label>
                    <input class="form-control" type="text" placeholder="Enter Twitter Username Here" aria-label="default input example"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Keyword</label>
                    <input class="form-control" type="text" placeholder="Enter Keyword Here" aria-label="default input example"></input>
                </div>
            </div>
        );
    } else if (eventType == "stock") {
        selectedForm = (
            <div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Stock Ticker</label>
                    <input class="form-control" type="text" placeholder="Enter Stock Ticker Here" aria-label="default input example"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Stock Increase Percent</label>
                    <input class="form-control" type="number" min="1" step="any" placeholder="Enter Stock Increase Amount Here" aria-label="default input example"></input>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label">Type of event</label>
            <select className="form-select mb-5" aria-label="Default select example" onChange={options} value={eventType}>
                <option value="tweet">Tweet</option>
                <option value="stock">Stock Change</option>
            </select>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input className="form-control" type="text" placeholder="Enter Title Here" aria-label="default input example"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Link to image</label>
                <input className="form-control" type="text" placeholder="Enter link here" id="formFile"></input>
            </div>
            {selectedForm}
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add Event</button>
            </div>
        </form>
    )
}
