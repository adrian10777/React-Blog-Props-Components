import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
    return (
        <div className='ui container comments'>

{/* <Approval card is a component
14-19 shows reusability
*/}
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
{/* approval card becomes parent component and commentdetail a childcomponent containing prop values with u
 send to component files */}
            <ApprovalCard>
                <CommentDetail
                    author="sam"
                    timeAgo="Today at 4:45"
                    content="Nice Blog Post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Rob"
                    timeAgo="Today at 2:45"
                    content="Wow!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Angie"
                    timeAgo="Yesterday at 4:45"
                    content="Nice!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>



    );
}

ReactDOM.render(<App />, document.querySelector('#root'));