import Display from './Display'
import { renderDisplayLayer } from "@mcesystems/reflow-react-display-layer";
import { Transports } from "@mcesystems/reflow/dist/Transports";


export const views = {
    Display,
}

console.log("shmuel")

const websocket = new Transports.WebSocketsTransport({
    port: 7890,
    host: 'localhost'
})

console.log("shmuel2")


renderDisplayLayer({
    element: document.getElementById("main")!!,
    transport: websocket,
    views
})


console.log("shmuel3")
