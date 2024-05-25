function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let st = s1.toLowerCase();
	let str = s2.toLowerCase();
	return st.indexOf(str)
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));