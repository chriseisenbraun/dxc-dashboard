import React, {Component} from 'react'

export class MissionDetail extends Component {
  render() {
    const {missions} = this.props;
    // const { missions } = this.props;  === const missions = this.props.missions
    // destructs missions array, and make available to props
    const missionsHeading = missions.map((mission) => {
      console.log(mission);
      return (
        <div className="mission-list">
          <h2>
            <span>{mission.missionNumber}:
            </span>
            <span>{mission.missionTitle}</span>
          </h2>
        </div>
      )
    })

    const missionsImg = missions.map((mission) => {
      console.log(mission);
      return (
        <div className="mission-list">
          <p>
            {mission.coverImgURL}
          </p>
        </div>
      )
    }) // missionsImg

    const SeasonLength = missions.map((mission) => {
      return (mission.seasons.map((season) => {
        return (
          <div>
            <p>Number of eps: {season.episodes.length}</p>
          </div>
        )
      }))
    }) // SeasonLength

    const episodesTitles = missions.map((mission) => {
      return (mission.seasons.map((season) => {
        return (season.episodes.map((episode) => {
          return (
            <div>
              <p>+ {episode.title}</p>
            </div>
          )
        }))
      }))
    }) // episodesTitles

    // Return main jsx
    return (
      <div>
        <p>{episodesTitles}</p>
        <p>{SeasonLength}</p>
        <p>{missionsHeading}</p>
        <p>{missionsImg}</p>
      </div>
    )
  }
}
