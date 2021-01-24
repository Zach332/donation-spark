# donation-spark

Looking for an easy way to make the world a better place? Look no further than Donation Spark, a free and easy way to automatically donate to the causes that matter to you.

## Inspiration

We built Donation Spark to provide an easy way to donate to valuable, important causes automatically. We hope that Donation Spark will make donating easier and more fun. 

## What it does

The [Donation Spark homepage](http://donation-spark.tech/#/home) provides a list of different sparks, called sparks, for different possible events. sparks are broad in scope, ranging from Elon musk tweeting about Mars to having a good day in the stock market. 

Users can also create the own sparks. For example, users can add a spark that activates when a stock goes up by a specified percentage in one day.

At the moment, Donation Spark is just a proof of concept, but we have a vision for where it should go from here.

## What's next for Donation Spark

When users subscribe to sparks, they should be notified via email about the spark and prompted to donate to the cause they selected. Even further in the future, Donation Spark could directly link to a user's bank account to make donating even easier.

At the moment, Donation Spark is using a temporary in-memory data structure to store sparks, but in the future, that should be replaced by a fully-fledged database.

## Challenges we ran into

We spent a significant amount of time getting components of our application to talk to each other. For example, we ran into CORS issues when calling our backend API from our frontend.

## Accomplishments that we're proud of

We are really proud of how the application turned out overall. We weren't sure how much we could get done in the short time we had, but we were pleasantly surprised. 

## What we learned

We learned a whole lot over the last ~24 hours. Highlights include working with Google Cloud Platform and IEX for the first time, as well as learning more about both GET and POST APIs.

## Built with

Donation Spark's frontend is built using React and hosted on Github Pages with a custom domain ([donation-spark.tech](http://donation-spark.tech/#/home)) provided by domains.com. 

Our Spring Boot backend is written in Java and hosted on Google Cloud Platform App Engine. It connects to the IEX Cloud Platform API to get stock price information.
