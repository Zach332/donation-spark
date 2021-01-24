import React from 'react'
import { Link } from 'react-router-dom';

export default function AddDonationEvent() {

    const [eventType, setEventType] = React.useState("nothing");

    const options = (event) => {setEventType(event.target.value)};

    let selectedForm;

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
                    <label for="exampleFormControlInput1" class="form-label">Name of Stock</label>
                    <input class="form-control" type="text" placeholder="Enter Name of Stock Here" aria-label="default input example"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Stock Increase Amount</label>
                    <input class="form-control" type="number" min="1" step="any" placeholder="Enter Stock Increase Amount Here" aria-label="default input example"></input>
                </div>
            </div>
        );
    }

    return (
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input class="form-control" type="text" placeholder="Enter Title Here" aria-label="default input example"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Image</label>
                <input class="form-control" type="file" id="formFile"></input>
            </div>
            <select class="form-select" aria-label="Default select example" onChange={options} value={eventType}>
                <option selected>Type of Event</option>
                <option value="tweet">Tweet</option>
                <option value="stock">Stock Change</option>
            </select>
            {selectedForm}
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Add Event</button>
            </div>
        </form>
    )
}
