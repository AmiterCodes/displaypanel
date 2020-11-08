import { Reflow, Transports } from "@mcesystems/reflow";
import views from '@reflow-typescript-react/interfaces';
import displayPanel from './displayPanel';


const websocket = new Transports.WebSocketsTransport({
    port: 7890
})

const app = new Reflow({
    transport: websocket,
    views,
});

app.start(displayPanel);