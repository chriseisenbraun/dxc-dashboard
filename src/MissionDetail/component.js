import React, { Component } from 'react'

export class MissionDetail extends Component {
  render() {
    const { missions } = this.props;
    return (
      <div>
        {missions.map((mission) => {
          return (
            <>
              <h1>{mission.missionTitle}</h1>

              {mission.seasons.map((season) => {
                return (

                  <>
                    <p>Number of eps: {season.episodes.length}</p>

                    {season.episodes.map((episode) => {
                      return (
                        <p>+ {episode.title}</p>

                      )

                    })}

                  </>
                )

              })}
            </>
          )
        }
        )}

      </div>
    )
  }
}
