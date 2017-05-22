function BubbleTree(ctx, treeData){
    var root = treeData,
        currentNode = root, 
        parentNode = null,
        w = ctx.canvas.width,
        h = ctx.canvas.height
    
    function processData(treeData){
        // 对原始数据进行处理 可能需要深度复制
        return treeData
    }

    function drawNode(node, x, y, r){
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = node.background || 'red'
        ctx.fill()
        ctx.fillStyle = '#dddddd'
        ctx.fillText(node.name, x,y)
    }
    
    function render(){
        ctx.clearRect(0,0,w,h)
        drawNode(currentNode, 200, 200, 70)
        var x = 400, y = 30
        currentNode.children.forEach(function(node){
            // 计算 x,y
            drawNode(node, x, y, 25)
            y += 60
        })
    }

    return{
        r: render
    }
}