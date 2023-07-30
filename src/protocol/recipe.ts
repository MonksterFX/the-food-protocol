import { ProtocolNode } from "../base/node"

export class Recipe{

    title: string = ''

    protected inputs: ProtocolNode[] = []
    protected inputsMap: Record<string, ProtocolNode> = {}

    get nodes(){
        return this.inputs
    }

    private traverse(node: ProtocolNode, nodeList: Record<string, ProtocolNode>, filter: (node: ProtocolNode)=>boolean = ()=>true){
        
        if(node.uuid in nodeList){
            return
        }

        if(filter(node)){
            nodeList[node.uuid] = node
        }
        
        for(const child of node.process){
            this.traverse(child.to, nodeList, filter)
        }
    }

    private filterTree(filter: (node: ProtocolNode)=>boolean){
        const nodeList: Record<string, ProtocolNode> = {}

        for(const child of this.inputs){
            this.traverse(child, nodeList, filter)
        }

        return nodeList
    }

    get ingredients(){
        return Object.values(this.filterTree((node)=>node.type === 'input'))
    }

    get processes(){
        return Object.values(this.filterTree((node)=>node.type === 'process'))
    }

    calculateDepths(){
        // reset
        this.processes.forEach(node => node.depth === -1)

        let processes = this.processes

        // init
        for(const i of this.ingredients){
            for(const child of i.process){
                child.to.depth = 1
            }
        }

        while(processes.length > 0){

            for(const process of processes){
                // all parent already calculated
                if(process.processedBy.every((node)=>node.from.depth > -1)){
                    process.depth = process.processedBy.reduce((prev, curr)=>Math.max(prev, curr.from.depth + 1),0)
                }
            }

            processes = processes.filter(p=>p.depth === -1)
        }

        console.log('recalculated succesfull')
    }


    addInput(node: ProtocolNode){
        this.inputsMap[node.uuid] = node
        this.inputs.push(node)
        this.calculateDepths()
    }
}