import { Edge } from "../src/base/edge";
import { NodeFactory } from "../src/base/node";
import { TextExporter } from "../src/export/TextExporter";
import { Recipe } from "../src/protocol/recipe";

const recipe = new Recipe()

const water = NodeFactory.createInput()
water.name = "water"

const salt = NodeFactory.createInput()
salt.name = "salt"

const noodles = NodeFactory.createInput()
noodles.name = "noodles"

// process
const boilWater = NodeFactory.createProcess()
boilWater.name = "boil water"

const cookNoodles = NodeFactory.createProcess()
cookNoodles.name = "cook noodles"

// outputs
const cookedNoodles = NodeFactory.createOutput()
cookedNoodles.name = "cooked noodles"

const noodleWater = NodeFactory.createOutput()
noodleWater.name = "noodle water"


// process connections

new Edge(water, boilWater)
new Edge(salt, boilWater)

new Edge(boilWater, cookNoodles)
new Edge(noodles, cookNoodles)

new Edge(cookNoodles, cookedNoodles)
new Edge(cookNoodles, noodleWater)

recipe.addInput(noodles)
recipe.addInput(salt)
recipe.addInput(water)

const exporter = new TextExporter(recipe)
exporter.print()



