import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
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
    const user = props.user;
    const listStyle = listItemStyle();
    return (
        <div className="list__block1">
            { enrolledClasses &&
            <List component="nav" aria-label="secondary mailbox folder" >
                {enrolledClasses.map((Aclass)=>{
                    return (
                        <div>
                            <ListItem
                                //button
                                style={listStyle}
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={Aclass.classSubjectName + " ["+Aclass.classSubjectCode+" ] "} />
                                <ListItemSecondaryAction>
                                <Link 
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
                                        // onClick={()=>{props.ClassListClick(Aclass._id)}}
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
