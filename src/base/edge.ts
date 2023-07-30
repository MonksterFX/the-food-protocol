import crypto from 'crypto';
import { ProtocolNode } from "./node";

export type EdgeExecution = {
    // tbd.
}

export type EdgeCondition = {
    // tbd.
}

export class Edge{

    private uuid: string

    protected conditions: EdgeCondition = []
    protected executions: EdgeExecution = [] 

    constructor(readonly from: ProtocolNode, readonly to: ProtocolNode){
        this.uuid = crypto.randomUUID() 
        this.from.process.push(this)
        this.to.processedBy.push(this)
    }

    toString(){
        return `edge ${this.from.uuid}->${this.to.uuid}`
    }
}