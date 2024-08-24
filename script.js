// JavaScript for the sandbox game

// Set up grid dimensions
const gridSize = 10;

// Function to create the grid
function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // Clear any existing grid
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.addEventListener('click', toggleBlock);
        grid.appendChild(block);
    }
}

// Function to toggle block state
function toggleBlock(event) {
    const block = event.target;
    block.classList.toggle('active');
}

// Initialize the grid
createGrid();
