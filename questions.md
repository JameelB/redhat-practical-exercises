**Open Ended Questions**
---

**Section 1 - Design & Architecture**
  * **Q1. Could you outline what you would consider to be the important considerations If you were asked to develop an api that could potentially be called by thousands of users across many mobile
applications?**

    * Distribute load between the client and the server.
        Make use of the client-side local and session storage to avoid having to continuously send data back and forth for every request.


  * **Q3. In your own words, explain what you understand microservices to be. When would you consider using them? What are the pros and cons of using them?**
    * Microservices are self-contained process that performs a single business capability. Each microservice is organized around business capabilities and they work together and communicate via APIs to form a larger system.
    * I would consider using microservices for large complex systems with a high need for availability, efficient scaling and flexibility for partial development.
    * Pro:
      * More flexibility: Allows independent deployment of individual components.
      * Easier organization of large complex systems around its business capabilities.  
      * Availability: Each services are distributed around multiple servers and even multiple data centers.
      * Efficient scaling: allows to scale out with duplicate copies of the heaviest used services.
      * Multiple Platforms: Allows usage of different platforms and tools in different services.
    * Cons:
      * Increased complexity: Microservices introduces more concepts that increases complexity such as asynchronous communication and distributed computing.
      * Risk of inconsistency: Harder to maintain consistency with a de-centralized database.

  * **Q4. How would you secure communications between Apps on mobile devices and a RESTful API?**
    * Use an authorization framework such as OAuth2 to provide a third-party app access to the REST API via access or authentication tokens.

**Section 2 - Development & Deployment**
  * **Q2. From the perspective of a technical delivery team, can you think of some deployment, management & support considerations for a hosted SaaS product vs. an On Premise product?**
    * 

**Section 3 - General**
