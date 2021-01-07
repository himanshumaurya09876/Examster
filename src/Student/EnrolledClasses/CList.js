import { Button, Checkbox, Divider, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import React from 'react'
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
                                button
                                style={listStyle}
                                Disable
                                // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                <ListItemText primary={Aclass.className + " ["+Aclass.classCode+" ] "} />
                                <ListItemSecondaryAction>
                                <Button
                                    style={{
                                        width:"100px" , 
                                        backgroundColor:"lightSkyBlue"
                                    }}
                                >Open</Button>
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








// <div className="list__item">
//                 <div className="list__itemContent">
//                     <p>{props.class.className +" - " +props.class.classCode}</p>
//                 </div>
//                 <div className="list__itemButton">
//                     <Button
//                         style={{
//                             width:"100px" , 
//                             backgroundColor:"cyan"
//                         }}
//                     >Open</Button>
//                 </div>
// </div>