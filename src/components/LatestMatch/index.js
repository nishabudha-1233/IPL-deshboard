import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    return (
      <div>
        <h1>Latest Match</h1>
        <div className="Latest-match-card">
          <div className="latest-match-details-container">
            <div className="latest-match-details-main">
              <p>{competingTeam}</p>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-detail-info">
            <div className="match-info-item">
              <p>First Inning</p>
              <p>{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p>Second Inning</p>
              <p>{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p>Man Of The Match</p>
              <p>{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p>Umpires</p>
              <p>{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
