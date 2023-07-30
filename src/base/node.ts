import crypto from 'crypto';
import { Edge } from "./edge"

export type NodeType = 'input' | 'output' | 'process' | 'product'

export class ProtocolNode{
    readonly uuid: string
    readonly type: NodeType

    readonly processedBy: Edge[] = []
    readonly process: Edge[] = []

    /** max number of nodes before this **/
    depth: number = -1

    name: string = ''

    constructor(type: NodeType){
        this.type = type
        this.uuid = crypto.randomUUID()
    } 
}

export class NodeFactory{
    static createInput(){
        const node = new ProtocolNode('input')
        node.depth = 0
        return node
    }

    static createOutput(){
        return new ProtocolNode('output')
    }

    static createProcess(){
        return new ProtocolNode('process')
    }

    static createProduct(){
        return new ProtocolNode('product')
    }
}