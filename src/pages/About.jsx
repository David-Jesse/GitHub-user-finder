function About() {
  return (
    <>
      <div>
        <h1 className="text-6xl mb-4">GitHub Finder</h1>
        <p mb-4 text-2xl font-light>
        Welcome to Github Finder, a React app that helps you search GitHub profiles and access
        their repos. With Github finder, you can easily find and connect with other developers, discover new projects, and stay up-to-date on the latest
        trends in the tech world.
        </p>
        </div>

        <div className="container mt-4">
          <h4 font-bold mb-2>Features:</h4>
            <ul>
              <li>- Search for GitHub profiles by name or username, or email</li>
              <li>- Browse public repositories by language, topic, or popularity</li>
              <li>- View detailed information about profiles and repositories, including contributions, stars, and forks</li>
              <li>- Follow profiles and repositories to stay up-to-date on their activity</li>
            </ul>
        </div>

       </>
  
  )
}

export default About