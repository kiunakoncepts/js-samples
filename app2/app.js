const tiles = document.querySelectorAll('.item');
const spaces = document.querySelectorAll('.space');

tiles.forEach(tile => {
    tile.addEventListener('dragstart',(e) => {
        tile.classList.add('moving');
    })
    tile.addEventListener('dragend',(e) => {
        tile.classList.remove('moving');
    })
})

spaces.forEach(space => {
    space.addEventListener('dragover', (e) => {
        e.preventDefault();
        const oldTile = space.firstChild;
        const currentTile = document.querySelector('.moving');
        const parentSpace = currentTile.parentElement;
        parentSpace.appendChild(oldTile);
        space.appendChild(currentTile);
        // console.log(parentSpace);
        // console.log(space.child)
        // parentSpace.appendchild(space.firstChild)
    })
})

