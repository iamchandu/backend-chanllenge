const printDiamond = (input) => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const position = alphabet.indexOf(input, 0);
    const arraySize = (position*2)+1
    const subArray = alphabet.slice(0, position+1)
    let start = Math.ceil(arraySize/2)
    let end = start;
    let dimondArray = subArray.map((v,i) => {
        let row = []
        if (start == end) {
            row[start-1] = v;
        } else {
            row[start-1] = v;
            row[end-1] = v;
        }
        start--;
        end++;
        return row;
    })
    dimondArray = [...dimondArray, ...dimondArray.reverse().slice(1, end-1)]
    console.log(dimondArray)

}
printDiamond("A")
printDiamond("B")
printDiamond("C")
printDiamond("D")
printDiamond("E")