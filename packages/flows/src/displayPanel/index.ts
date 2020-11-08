import { Flow } from "@mcesystems/reflow";
import viewInterface from "@reflow-typescript-react/interfaces"
import { DisplayInput } from "@reflow-typescript-react/interfaces/src/views/DisplayPanel";
import si from 'systeminformation'

const displayPanel: Flow<typeof viewInterface> = async ({ view, views }) => {
    
    
    const displayPanelView = view(0, views.displayPanel, await createDisplayInfo())
    console.log("flow call")

    displayPanelView.on('update',async () => {
        console.log("received update")
        displayPanelView.update(await createDisplayInfo())
    })

    await displayPanelView;
}

async function createDisplayInfo() : Promise<DisplayInput> {

    const osInfo = await si.osInfo()

    return <DisplayInput>{
        os: osInfo.platform,
        cpu: '',
        kernel: '',
        memory: '',
        shell: '',
        terminal: '',
        uptime: 1000
    }
} 

export default displayPanel;