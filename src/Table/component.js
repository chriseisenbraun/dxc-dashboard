import React, { Component } from 'react'
import './Table.css'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Duration</th>
        <th>Status</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const episodes = props.episodeData.map((episode, index) => {
    return (
      <tr key={index}>
        <td>{episode.title}</td>
        <td>{episode.durationMin}</td>
        <td>{episode.status}</td>
      </tr>
    )
  })
  return (
    <tbody>{episodes}</tbody>
  )
}

export class Table extends Component {
  render() {
    const { episodeData } = this.props
    return (
     <table>
       <TableHeader />
       <TableBody episodeData={episodeData}/>
    </table>
    )
  }
}
