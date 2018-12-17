import React, {Component} from 'react'
import { Table } from '../Table';

export class Notebook extends Component {
  render() {
      const episodes = [
         {  "title": "Welcome to your role",
            "durationMin": 8,
            "status": "Completed"
          },
          {
            "title": "Who are we?",
            "durationMin": 18,
            "status": "In progress"
          },
          {
            "title": "Who are partners?",
            "durationMin": 6,
            "status": "Not Started"
          },
          {
            "title": "Sales 101",
            "durationMin": 12,
            "status": "Not Started"
          }
    ];

    return (
      <div className="wrap">

        <div className="notebook">
          <h1>notebook page</h1>
          <p>This was created with the Notebook component</p>
        </div>

        <div className="table-test">
          <h2>This is a table test</h2>
            <Table episodeData={episodes}/>
        </div>

      </div>
    )
  }
}
