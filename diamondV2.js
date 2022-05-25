const printDiamond = (input) => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const position = alphabet.indexOf(input, 0);
    const arraySize = (position*2)+1
    const subArray = alphabet.slice(0, position+1)
    let start = Math.ceil(arraySize/2)
    let initStart = start;
    let dimondArray = subArray.map((v,i) => {
        let row = []
        row[initStart-1] = null;
        row[start-1] = v;
        row = [...row, ...row.reverse().slice(1, initStart+1)]
        start--;
        return row.map(v=>v?v:null);
    })
    dimondArray = [...dimondArray, ...dimondArray.reverse().slice(1, initStart)]
    console.log(dimondArray)

}
printDiamond("A")
printDiamond("B")
printDiamond("C")
printDiamond("D")
printDiamond("E")