function cform() {
			let a = document.getElementById("name").value;
			let b = document.getElementById("email").value;
			let c = document.getElementById("sub").value;
			let d = document.getElementById("mess").value;

			if (a === "" || b === "" || c === "" || d === "" ) {
				alert("Please fill all the fields.");
				return false;
			}
			else if (!/^[a-zA-Z\s]+$/.test(a)) {
				alert("Enter a valid name.");
				return false;
			}
			else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b)) {
				alert("Enter a valid email.");
				return false;
			}
				else if (!/^[a-zA-Z\s]+$/.test(c)) {
				alert("Enter a valid subject.");
				return false;
			}
				else if (!/^[a-zA-Z0-9\s]+$/.test(d)) {
				alert("Enter a valid message.");
				return false;
			}
			else {
				alert("Message send successfully!");
				return true;
			}
		}