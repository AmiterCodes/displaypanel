import { Card, CardContent, makeStyles, Slide, Typography, withTheme } from "@material-ui/core";
import React from "react";


interface FieldProps {
    title: string;
    content: string;
}

export default function Field(props : FieldProps) {

    const useStyles = makeStyles({
        root: {
            color: 'white',
          minWidth: 275,
          background: 'linear-gradient(115.56deg, #0F1F2B -7.01%, #061017 102.52%)',
          boxShadow: ' 0px 4px 37px rgba(0, 0, 0, 0.63)',
          minHeight: '20rem'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    
    const classes = useStyles();
    return(
        <Slide in direction='down'>
            <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} variant="caption">
                            {props.title}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {props.content}
                        </Typography>
                    </CardContent>
                </Card>
            </Slide>
    )

}