import { getNodes } from './fetchNodes.js'


buildNodes()


async function buildNodes() {
    let allNodes = await getNodes()
    let nodesContainer = document.querySelector('.nodes-container')

    for(let i = 0; i < allNodes.length; i++) {
        let node = createNode(allNodes[i])

        nodesContainer.appendChild(node);
        


    }

}

function createNode(node) {
    let nodeCell = document.createElement('div')
    let nodeName = document.createElement('span')
    nodeName.className = 'node-cell-name'

    nodeCell.className = 'node-cell'
    nodeCell.style.left = `calc(${node.x} - ${node.size}/2`
    nodeCell.style.top = `calc(${node.y} - ${node.size}/2 `
    nodeCell.style.width = `${node.size}`
    nodeCell.style.height = `${node.size}`

    nodeName.textContent = `${node.name}`
    nodeCell.tabIndex = '0'
    nodeCell.appendChild(nodeName);

    return nodeCell
    

}