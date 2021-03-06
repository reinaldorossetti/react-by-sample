import * as React from 'react';
import {MemberEntity} from './model/member';
import {memberAPI} from './api/memberAPI';
import {MemberRowComponent} from './memberRow';

interface Props extends React.Props<MembersTableComponent> {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members : Array<MemberEntity>
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props : Props){
        super(props);
        // set initial state
        this.state = {members: []};
  }


   // Standard react lifecycle function:
   // https://facebook.github.io/react/docs/component-specs.html
   public componentWillMount() {
     this.setState({members: memberAPI.getAllMembers()})
   }

   public render() {

       return (
        <div className="row-no-margin">
          <h2> Members Page</h2>
          <table className="table">
            <thead>
              <tr>
                <th>
                  Avatar
                </th>
                <th>
                  Id
                </th>
                <th>
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.members.map((member : MemberEntity) =>
                  <MemberRowComponent member = {member}/>
                )
              }
            </tbody>
          </table>
        </div>
       );
  }
}
