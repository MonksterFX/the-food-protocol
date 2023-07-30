# the-food-protocol

The food protocol is an experimental approach to abstract recipes of all kind into an abstract universal protocol.

It consists of three parts:

- DataModel
- Editor
- Exporter

## the basic model

The model is implemented as a graph. All ingredients, processes and outputs are described as nodes, while controlflow are implemented trough edges.

### edges

Edges controlling flow

- conditions
- loops

Examples:

- Wait until condition is met
- If, Else
- Repeat
- Split
- Mix

### nodes

Examples:

- Ingredients: Salt, Water, Noodles
- Process: Boil Water
- Output: Cooked Noodles

### metadata 

Exmaples: 

- Temperature, Humidity
- Weight
- PH

  
