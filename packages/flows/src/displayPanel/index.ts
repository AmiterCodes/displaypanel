import { Flow } from "@mcesystems/reflow";
import viewInterface from "@reflow-typescript-react/interfaces"
import { DisplayInput } from "@reflow-typescript-react/interfaces/src/views/DisplayPanel";
import si from 'systeminformation'

const displayPanel: Flow<typeof viewInterface> = async ({ view, views }) => {
    
    
    const displayPanelView = view(0, views.Display, await createDisplayInfo())
    console.log("flow call")

    displayPanelView.on('update',async () => {
        console.log("received update")
        displayPanelView.update(await createDisplayInfo())
    })

    await displayPanelView;
}

async function createDisplayInfo() : Promise<DisplayInput> {

    const osInfo = await si.osInfo();
    const cpu = await si.cpu();
    const mem = await si.mem();
    let shell;
    try {
        shell = await si.shell();
    } catch(e) {
        shell = 'shell not supported'
    }
    const user = (await si.users())[0]
    const time = si.time()

    return <DisplayInput>{
        os: osInfo.platform,
        cpu: `${cpu.manufacturer} ${cpu.model} ${cpu.brand} @ ${cpu.speed}GHz`,
        kernel: osInfo.kernel,
        memory: `${(mem.used / 1048576).toFixed(2)} MB / ${(mem.total / 1048576).toFixed(2)} MB`,
        shell,
        terminal: user.tty,
        uptime: parseFloat(time.uptime) * 1000 
    }
} 

export default displayPanel;