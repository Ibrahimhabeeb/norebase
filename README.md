- How can you improve the feature to make it more resilient against abuse/exploitation?
Answer - By Implementing express-rate-limit library,  this will prevent too many requests from the same ip address (user)



-How can you improve the feature to make it scale to millions of users and perform without issues?

Answer - By using an App/Network Load Balancer and deploying the application to diffferent servers so that the load balancer can distribute the requests to the servers.


-How will you scale to a million concurrent users clicking the button at the same time

Answer - By aggregating the requets and processing them in batches this will reduce the workload on the database



-How will you scale to a million concurrent users requesting the article's like count at the same time

Answer - The article data can be cached using a CDN, so the edge servers can serve the users this will reduce the load on the main server