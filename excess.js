document.getElementById('get-solution').addEventListener('click', function() {
    const wasteType = document.getElementById('waste-type').value;
    const solutionOutput = document.getElementById('solution-output');
    
    let solution = '';
    
    switch(wasteType) {
        case 'corn-fibers':
            solution = 'Corn fibers can be sold to bag manufacturing companies for eco-friendly packaging materials.';
            break;
        case 'wet-waste':
            solution = 'Wet waste can be used to create compost or natural fertilizer for your farm, improving soil quality.';
            break;
        case 'crop-residues':
            solution = 'Crop residues can be used for biofuel production or as animal feed.';
            break;
        default:
            solution = 'Please select a waste type to get a solution.';
    }
    
    solutionOutput.innerHTML = solution;
});
