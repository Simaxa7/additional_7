module.exports = function solveSudoku(matrix) {
	let arrPositionsWithZero = searchPositionsWithZero(matrix);

	function searchPositionsWithZero(arr){
		let myArr = [];
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if(!arr[i][j]){
					myArr.push([i,j]);
				}
		  }
		}
		return myArr
	}

	function allChecks(arr, horizontal, vertical, value) {
		// cheech X and Y
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][vertical] === value || arr[horizontal][i] === value) {
				return false;
			}
		}

		//  check 9 squares in size 3 * 3
		let indX = 8;	
		let startIdnexHorizontal = 0;
		
		while (horizontal <= indX) {
			startIdnexHorizontal = indX-2;
			indX = indX - 3;
		}

		let indY = 8;	
		let startIndexVertical = 0;
		
		while (vertical <= indY) {
			startIndexVertical = indY-2;
			indY = indY - 3;
		}

		for (let i = startIdnexHorizontal; i < startIdnexHorizontal + 3; i++)
			for (let j = startIndexVertical; j < startIndexVertical + 3; j++)
				if(arr[i][j] === value)      
					return false;
		
		return true;
	};

	function startСalculating(matrix) {
	
	for (let i = 0; i < arrPositionsWithZero.length; i++) {
		let myIndex = i;
		let horizontal = arrPositionsWithZero[myIndex][0];
		let vertical = arrPositionsWithZero[myIndex][1];
		let value = matrix[horizontal][vertical] + 1;	
		let cheeckTrueOfFalse = false;
		
		while (!cheeckTrueOfFalse && value <= 9) {

			if (allChecks(matrix, horizontal, vertical, value)) {
				cheeckTrueOfFalse = true;
				matrix[horizontal][vertical] = value;
				myIndex++;
			}else{
				value++;
			}
		}
		
		if (!cheeckTrueOfFalse) {
			matrix[horizontal][vertical] = 0;
			myIndex--; 
		}

		i = myIndex - 1;
	}
	return matrix;
  };

  const anwerMatrix = startСalculating(matrix, arrPositionsWithZero);
	
	return anwerMatrix;
};