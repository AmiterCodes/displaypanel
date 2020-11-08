import { ViewInterface } from "@mcesystems/reflow";

export interface DisplayInput {
    os: string;
    kernel: string;
    uptime: number;
    cpu: string;
    memory: string;
    terminal: string;
    shell: string;
}

export interface DisplayEvents {
    update: void;
}

type DisplayPanel = ViewInterface<DisplayInput, DisplayEvents>;


export default DisplayPanel;
