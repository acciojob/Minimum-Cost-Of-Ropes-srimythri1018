function calculateMinCost() {
  //your code here
  const input = document.getElementById("ropeLengths").value;
  const ropeLengths = input.split(",").map(Number);
  ropeLengths.sort((a, b) => a - b);
	let totalCost = 0;
	let currentCost = 0;
	while (ropeLengths.length > 1) {
				// Take the two smallest ropes
				const first = ropeLengths.shift();
				const second = ropeLengths.shift();

				// Connect the two ropes
				currentCost = first + second;

				// Add the cost to the total cost
				totalCost += currentCost;

				// Insert the connected rope back into the array
				// at the correct position to maintain sorted order
				for (let i = 0; i < ropeLengths.length; i++) {
					if (currentCost < ropeLengths[i]) {
						ropeLengths.splice(i, 0, currentCost);
						break;
					}
				}
		if (currentCost >= ropeLengths[ropeLengths.length - 1]) {
					ropeLengths.push(currentCost);
				}
			}

			// Display the total cost
			document.getElementById("result").innerHTML = `Minimum cost of connecting ropes: ${totalCost}`;
		}
}  
