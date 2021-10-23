import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './CList.css'
 function listItemStyle(){
     return {
         marginTop : "15px",
         border : "1px  solid black",
         borderRadius : "5px",
         padding: "10px",

     }
 }

function CList(props) {
    const enrolledClasses = props.enrolledClasses;
    const user = props.user;
    const listStyle = listItemStyle();
    return (
        <div className="classList__list__block1">
            { enrolledClasses &&
            <List component="nav" aria-label="secondary mailbox folder" >
                <ListItem
                    style={listStyle}
                    className="student__list__header"
                    >
                    <ListItemText primary={
                        <div className="student__list__item" >
                            <div  className="student__list__item__name">Subject Name</div>
                            <div  className="student__list__item__name">Subject Code</div>
                        </div>
                    } />
                </ListItem>
                {enrolledClasses.map((Aclass)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                >
                                <ListItemText primary={
                                    <div className="student__list__item" >
                                        <div  className="student__list__item__name">{Aclass.classSubjectName}</div>
                                        <div  className="student__list__item__name">{Aclass.classSubjectCode}</div>
                                    </div>
                                } />

                                <ListItemSecondaryAction>
                                <Link 
                                    style={{
                                            textDecorationLine:"none"
                                        }}
                                    to={{
                                        pathname: "/student/class",
                                        state: { user: user , 
                                                classId : Aclass.classId }
                                    }}
                                    replace
                                >
                                    <Button
                                        style={{
                                            width:"100px" , 
                                            backgroundColor:"lightSkyBlue"
                                        }}
                                    >Open</Button>
                                </Link>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </div>
                        );
                     })
                }
            </List>
            }
        </div>      
    )
}

export default CList;
