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

    const listStyle = listItemStyle();
    return (
        <div className="list__block1">
            { enrolledClasses &&
            <List component="nav" aria-label="secondary mailbox folder" >
                {enrolledClasses.map((Aclass)=>{
                    return (
                        <div>
                            <ListItem
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={Aclass.classBranch + " - "+Aclass.classSection} />
                                <ListItemSecondaryAction>
                                <Link to={{
                                    pathname: "/teacher/class",
                                    state: { email: props.email , 
                                            classId : Aclass.classId }
                                }}>
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