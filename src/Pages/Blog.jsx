import PageTitle from "../Components/PageTitle"

const Blog = () => {
  return (
    <div>
      <PageTitle title={"Blog"}></PageTitle>
      <div className="mx-8 text-xl p-8">
        <div className="border p-4">
          <p className="font-bold">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p>
            An access token: is a digital key that grant authorized users access
            to specific resources and functionalities within an application or
            system. It act as a secure pass that verify your identity and
            permissions, allowing you to interact and retrieve information from
            protected areas. With an access token in hand, you hold the power to
            unlock the gates and traverse the digital realm with confidence.
            <br />
            Refresh Token: Your Personal Fountain of Continuous Access A refresh
            token is a magical elixir that ensures your seamless and
            uninterrupted journey in the digital realm. While access tokens have
            an expiration date, refresh tokens serve as an everlasting fountain
            of continuous access. Whenever your access token nears it is end,
            present the refresh token to the guardians of the realm, and they
            shall renew your access, granting you the privilege to navigate and
            explore without interruption. With a refresh token by your side,
            your adventure knows no bounds.
            <br />
            When a user or app logs in and gets a special key called an access
            token, they can use this key whenever they want to access something
            that needs permission. The server checks if the key is valid and if
            the user or app has the right permissions to access what they are
            asking for. If the access token expires and the user or app still
            needs access, they can use another special key called a refresh
            token to get a new access token without having to log in all over
            again.
          </p>
        </div>
        <div className="border p-4">
          <p className="font-bold">2.Compare SQL and NoSQL databases?</p>
          <p>
            SQL databases are highly organized and dependable for handling
            structured data. They excel at storing and retrieving structured
            information across multiple tables using SQL queries. Their strong
            relational model allows for complex queries, aggregations, and
            joins. With rigid schemas, they ensure data integrity and
            consistency, making them suitable for applications with well-defined
            data models and transactions. SQL databases bring order to
            structured data and provide a solid foundation for efficient data
            management.. <br />
            NoSQL Databases: Embracing the Unstructured Chaos NoSQL databases,
            fearless warriors of flexibility, embrace the unstructured chaos of
            modern data. Designed to handle dynamic, evolving, and heterogeneous
            information, they offer unparalleled scalability and agility. These
            databases eschew the traditional tabular model, opting for
            document-based, key-value, columnar, or graph-based structures. With
            NoSQL, developers can conquer the unpredictable nature of Big Data,
            unstructured content, and ever-changing schemas. Embracing the
            chaos, NoSQL databases bring forth the freedom to iterate rapidly,
            scale horizontally, and embrace the unstructured marvels of the data
            universe.
          </p>
        </div>
        <div className="border p-4">
          <p className="font-bold">3.What is express js? What is Nest JS?</p>
          <p>
            Express.js is a node.js framework . It is simple and does not get in
            your way. With its user-friendly design, Express.js makes it easy
            for developers to build strong and scalable web applications. It
            handles routes, manages middleware, and helps with handling HTTP
            requests and responses. It is like a dependable base that simplifies
            the process of building web applications. <br />
            NestJS, a progressive and innovative Node.js framework,
            revolutionizes the way developers build server-side applications.
            Drawing inspiration from Angular s architecture, NestJS embraces the
            concept of modularity, making it an ideal choice for creating
            scalable and maintainable applications.
          </p>
        </div>
        <div className="border p-4">
          <p className="font-bold">
            4.What is MongoDB aggregate and how does it work ?
          </p>
          <p>
            MongoDB Aggregation is a helpful tool that lets you do clever things
            with your data in MongoDB. It allows developers to ask complex
            questions, transform data, and group information together. With
            MongoDB Aggregation, you can really make the most out of the data
            you have stored in the database. It is like having a superpower for
            analyzing and manipulating data. <br /> <br />
            At its core, MongoDB Aggregation Pipeline is a sequence of stages
            that data passes through, with each stage performing a specific
            operation on the data. Each stage takes input from the previous
            stage and transforms it based on the defined operation, resulting in
            a processed and transformed output.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
