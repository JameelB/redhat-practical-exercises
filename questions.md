**Open Ended Questions**
---

**Section 1 - Design & Architecture**
  * **Q1. Could you outline what you would consider to be the important considerations If you were asked to develop an api that could potentially be called by thousands of users across many mobile
applications?**

    * Performance: Distribute load between the client and the server. Make use of the client-side local and session storage to avoid having to continuously send data back and forth for every request. Consider the use of long-polling or webhooks.
    * Scalability: Make sure to be able to monitor activity and and be able to scale at appropriate times.
    * Testing: Perform load and scalability testing.


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
    * Use an authorization framework such as OAuth2 to provide a third-party app access to the REST API via access tokens.

**Section 2 - Development & Deployment**
  * **Q1. If you were working with an application made up of several services that called out to one another in order to fulfill various tasks and apis, how would you approach testing these services, both individually particularly at the touch points where they called out to other services and as part of a whole?**
    * Perform unit tests in each service and perform integration tests to verify communication between each service. At the end, perform an end-to-end test to make sure it works together as an entire system and meet its goals.


  * **Q4. What do you value in a code base?**
    * Have a good structure and adhere to a standard to make it easier to read, maintain, refactor and extend.

**Section 3 - General**
  * **Q2. What do you find most exciting or interesting about working in the software development field?**
      * It allows me to always be creative and collaborative. Everyday, there is always something different to do and learn and it never gets boring. At the end of the day, you can have a working product or a functionality which other people can find useful. Seeing the things that you created and have people potentially using them is exciting and satisfying.


  * **Q4. In your career to date, what are you most proud of and why?**
    * I am most proud of my final year project. It allowed me to explore and learn about image processing, a field in computer science which I have never come across of before. My research for this project have proved useful leading to accurate image analysis results of my application. The research done is currently being extended to be on research paper.
