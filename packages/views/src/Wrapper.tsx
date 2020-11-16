import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'


export default class Wrapper extends React.Component {
    render() {
        
        return <ThemeProvider theme={createMuiTheme({
            typography: {
                fontFamily: 'Goldman',
                caption: {
                    opacity: 0.8,
                    fontSize: '.8rem'
                },
                body1: {
                    fontSize: '1.6rem',
                    fontFamily: 'Lato'
                }
            }
        })}>
            {this.props.children}
        </ThemeProvider>
    }
}