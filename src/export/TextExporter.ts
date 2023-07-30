import { Recipe } from "../protocol/recipe";


export class TextExporter{
    constructor(protected recipe: Recipe){}

    printIngredients(){

        console.log('ingredients:')

        for(const ingredient of this.recipe.ingredients){
            console.log(ingredient.name)
        }

        console.log('\n')
    }

    printSteps(){
        console.log('steps:')

        for(const process of this.recipe.processes.sort((a, b)=>a.depth - b.depth)){
            console.log(process.name, process.depth)
            console.log('width ingredients', process.processedBy.filter((node)=>node.from.type === 'input').map(n=>n.from.name).join())
            console.log('')
        }

        console.log('\n')
    }

    print(){
        this.printIngredients()
        this.printSteps()
    }
}