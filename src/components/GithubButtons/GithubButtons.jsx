import React from "react"
import GitHubButton from "react-github-btn"

const GithubButton = () => (
  <>
    <GitHubButton
      data-size="large"
      data-show-count="true"
      className="github-button"
      data-icon="octicon-repo-forked"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
      href="https://github.com/cobidev/gatsby-simplefolio/fork"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      data-size="large"
      data-show-count="true"
      data-icon="octicon-star"
      className="github-button"
      href="https://github.com/cobidev/gatsby-simplefolio"
      aria-label="Star cobidev/gatsby-simplefolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
)

export default GithubButton
