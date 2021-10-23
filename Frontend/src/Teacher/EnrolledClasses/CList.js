import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import { Redirect , Link} from 'react-router-dom/cjs/react-router-dom.min';
import './CList.css'
 function listItemStyle(){
     return {
         marginTop : "20px",
         border : "1px  solid black",
         borderRadius : "5px",
         padding: "10px",

     }
 }

function CList(props) {
    const enrolledClasses = props.enrolledClasses;
    const user =  props.user;
    const listStyle = listItemStyle();
    return (
        <div className="list__block1">
            { enrolledClasses &&
            <List component="nav" aria-label="secondary mailbox folder" >
            <ListItem
                className="classList__header"
                Disable >
                <ListItemText primary={
                    <div className="teacher__class__listLabelBody">
                        <div className="teacher__class__listLabel__class" style={{fontSize: "1.25rem", fontWeight:"bold"}}>
                            {"Class"}
                        </div>
                        <div className="teacher__class__listLabel__subject" style={{fontSize: "1.25rem", fontWeight:"bold"}}>
                            {"Subject Name"}
                        </div>
                        <div className="teacher__class__listLabel__subject" style={{fontSize: "1.25rem", fontWeight:"bold"}}>
                            {"Subject Code"}
                        </div>
                    </div>
                } />
            </ListItem>
            {enrolledClasses.map((Aclass)=>{
                return (
                    <div>
                        <ListItem
                            style={listStyle}
                            Disable
                            >
                            <ListItemText primary={

                                <div className="teacher__class__listLabelBody">
                                    <div className="teacher__class__listLabel__class">
                                        {Aclass.classBranch+" - "+Aclass.classSection}
                                    </div>
                                    <div className="teacher__class__listLabel__subject">
                                        {Aclass.classSubjectName}
                                    </div>
                                    <div className="teacher__class__listLabel__subject">
                                        {Aclass.classSubjectCode}
                                    </div>
                                </div>
                            } />
                            <ListItemSecondaryAction>
                            <Link to={{
                                pathname: "/teacher/class",
                                state: { user: user , 
                                        currentClass: Aclass }
                            }} 
                            style={{
                                        textDecorationLine :"none",
                                    }}
                            replace>
                                <Button
                                    style={{
                                        width:"100px" , 
                                        backgroundColor:"lightSkyBlue",
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