import React from 'react'

export default function About() {
    return (
        <div>
        <h1 id="donation-spark">donation-spark</h1>
        <p>Looking for an easy way to make the world a better place? Look no further than Donation Spark, a free and easy way to automatically donate to the causes that matter to you.</p>
        <h2 id="inspiration">Inspiration</h2>
        <p>We built Donation Spark to provide an easy way to donate to valuable, important causes automatically. We hope that Donation Spark will make donating easier and more fun. </p>
        <h2 id="what-it-does">What it does</h2>
        <p>The <a href="http://donation-spark.tech/#/home">Donation Spark homepage</a> provides a list of different triggers, called sparks, for different possible events. sparks are broad in scope, ranging from Elon musk tweeting about Mars to having a good day in the stock market. </p>
        <p>Users can also create the own sparks. For example, users can add a spark that activates when a stock goes up by a specified percentage in one day.</p>
        <p>At the moment, Donation Spark is just a proof of concept, but we have a vision for where it should go from here.</p>
        <h2 id="what-s-next-for-donation-spark">What&#39;s next for Donation Spark</h2>
        <p>When users subscribe to sparks, they should be notified via email about the spark and prompted to donate to the cause they selected. Even further in the future, Donation Spark could directly link to a user&#39;s bank account to make donating even easier.</p>
        <p>At the moment, Donation Spark is using a temporary in-memory data structure to store sparks, but in the future, that should be replaced by a fully-fledged database.</p>
        <h2 id="challenges-we-ran-into">Challenges we ran into</h2>
        <p>We spent a significant amount of time getting components of our application to talk to each other. For example, we ran into CORS issues when calling our backend API from our frontend.</p>
        <h2 id="accomplishments-that-we-re-proud-of">Accomplishments that we&#39;re proud of</h2>
        <p>We are really proud of how the application turned out overall. We weren&#39;t sure how much we could get done in the short time we had, but we were pleasantly surprised. </p>
        <h2 id="what-we-learned">What we learned</h2>
        <p>We learned a whole lot over the last ~24 hours. Highlights include working with Google Cloud Platform and IEX for the first time, as well as learning more about both GET and POST APIs.</p>
        <h2 id="built-with">Built with</h2>
        <p>Donation Spark&#39;s frontend is built using React and hosted on Github Pages with a custom domain (<a href="http://donation-spark.tech/#/home">donation-spark.tech</a>) provided by domains.com. </p>
        <p>Our Spring Boot backend is written in Java and hosted on Google Cloud Platform App Engine. It connects to the IEX Cloud Platform API to get stock price information.</p>
        </div>
    )
}
