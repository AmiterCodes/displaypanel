import { ReflowReactComponent } from "@mcesystems/reflow-react-display-layer";
import { Duration } from "luxon";
import React from "react";
import Field from "./Field";
import RefreshIcon from '@material-ui/icons/Refresh'
import DisplayPanel from '@reflow-typescript-react/interfaces/src/views/DisplayPanel'
import { Button, createStyles, Fab, Slide, Theme, Tooltip, WithStyles, withStyles } from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
    main: {
        position: 'absolute',
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(74.67deg, #21414B 0%, #272960 100.81%)'
    },
    grid: {
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(300px, 1fr))',
        gridGap: '3rem'
    },
    fab: {
        margin: theme.spacing(2),
    },
    centering: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Display extends ReflowReactComponent<DisplayPanel, WithStyles<typeof styles>> {
    componentDidMount() {
        const { event } = this.props;
        event('update', undefined);
    }

    render() {

        const { event, cpu, kernel, memory, os, shell, terminal, uptime, classes } = this.props;

        console.log(uptime);

        const duration = Duration.fromMillis(uptime)


        return (
            
                <main className={classes.main}>
                    <div className={classes.grid}>
                        <Field title="CPU" content={cpu} />
                        <Field title="Kernel" content={kernel} />
                        <Field title="Memory" content={memory} />
                        <Field title="OS" content={os} />
                        <Field title="Shell" content={shell} />
                        <Field title="Terminal" content={terminal} />
                        <Field title="Uptime" content={duration.toFormat('ddd * hh & mm ^ ss !').replace('*', 'Days').replace('&', 'Hours').replace('!', 'Seconds').replace('^', 'Minutes')} />

                    </div>
                    <div className={classes.centering}>
                        <Tooltip title="Refresh" aria-label="refresh">
                            <Fab color="primary" className={classes.fab} onClick={() => event("update", undefined)}>
                                <RefreshIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </main>
        )
    }
}

export default withStyles(styles)(Display);