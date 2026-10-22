window.addEventListener("load", programm);

function programm() {
	document.querySelectorAll("#schoolMarks-smartTables *").forEach(element => {
		element.addEventListener("click", updateAvreageMark);
	});

	function updateAvreageMark() {
		setTimeout(() => {
			document.querySelectorAll(".markRow").forEach(element => {
				element.remove();
			});
			
			for(let semester = 1; semester <= 8; semester++) {
				let durchschnitt = 0;
				let noten = 0;
				let color = "";

				let regex = /\(BMS\)/i;

				let rows = document.querySelectorAll("#schoolMarksTable" + semester + " > tbody > tr");
				rows.forEach(row => {
					const fachFeld = row.querySelector("td:nth-child(2)");
					const notenFeld = row.querySelector("td:nth-child(6) > span");

					if (fachFeld && notenFeld && regex.test(fachFeld.innerHTML)) {
						durchschnitt += parseFloat(notenFeld.innerHTML.trim().slice(1, -1));
						noten++;
					}
				});

				const row1 = document.createElement('tr');
				row1.className = 'markRow';
					
				if (noten == 0){
				row1.innerHTML = '<td></td><td>Durchschnitt (BMS)</td><td>Alle Fächer</td><td>-</td><td>Automatisch</td><td class=" center">-</td><td class=" center">-</td>';
				} else {
                    durchschnitt/=noten;
				    durchschnitt=parseFloat(durchschnitt.toFixed(1));

					if (durchschnitt >= 4.5) {
						color = "good"
					} else if (durchschnitt >= 4.0) {
						color = "ok"
					} else {
						color = "nok"
					}
					row1.innerHTML = '<td></td><td>Durchschnitt (BMS)</td><td>Alle Fächer</td><td>-</td><td>Automatisch</td><td class=" center"><span class="marksingle ' + color + ' ">(' + durchschnitt + ')</span></td><td class=" center">-</td>';
				}
				
				document.querySelector("#schoolMarksTable" + semester + " > tbody").appendChild(row1);

				durchschnitt = 0;
				noten = 0;

				regex = /^[0-9]{3}/i;

				rows = document.querySelectorAll("#schoolMarksTable" + semester + " > tbody > tr");
				rows.forEach(row => {
					const fachFeld = row.querySelector("td:nth-child(2)");
					const notenFeld = row.querySelector("td:nth-child(6) > span");

					if (fachFeld && notenFeld && regex.test(fachFeld.innerHTML)) {
						durchschnitt += parseFloat(notenFeld.innerHTML.trim().slice(1, -1));
						noten++;
					}
				});

				const row2 = document.createElement('tr');
				row2.className = 'markRow';
					
				if (noten == 0){
				row2.innerHTML = '<td></td><td>Durchschnitt (BFS)</td><td>Alle Fächer</td><td>-</td><td>Automatisch</td><td class=" center">-</td><td class=" center">-</td>';
				} else {
                    durchschnitt/=noten;
				    durchschnitt=parseFloat(durchschnitt.toFixed(1));

					if (durchschnitt >= 4.5) {
						color = "good"
					} else if (durchschnitt >= 4.0) {
						color = "ok"
					} else {
						color = "nok"
					}
					row2.innerHTML = '<td></td><td>Durchschnitt (BFS)</td><td>Alle Fächer</td><td>-</td><td>Automatisch</td><td class=" center"><span class="marksingle ' + color + ' ">(' + durchschnitt + ')</span></td><td class=" center">-</td>';
				}
				
				document.querySelector("#schoolMarksTable" + semester + " > tbody").appendChild(row2);

				durchschnitt = 0;
				noten = 0;

				regex = /^[0-9]{3}\*/i;

				rows = document.querySelectorAll("#schoolMarksTable" + semester + " > tbody > tr");
				rows.forEach(row => {
					const fachFeld = row.querySelector("td:nth-child(2)");
					const notenFeld = row.querySelector("td:nth-child(6) > span");

					if (fachFeld && notenFeld && regex.test(fachFeld.innerHTML)) {
						durchschnitt += parseFloat(notenFeld.innerHTML.trim().slice(1, -1));
						noten++;
					}
				});

				const row3 = document.createElement('tr');
				row3.className = 'markRow';
					
				if (noten == 0){
				row3.innerHTML = '<td></td><td>Durchschnitt (ÜK)</td><td>Alle Kürse</td><td>-</td><td>Automatisch</td><td class=" center">-</td><td class=" center">-</td>';
				} else {
                    durchschnitt/=noten;
				    durchschnitt=parseFloat(durchschnitt.toFixed(1));

					if (durchschnitt >= 4.5) {
						color = "good"
					} else if (durchschnitt >= 4.0) {
						color = "ok"
					} else {
						color = "nok"
					}
					row3.innerHTML = '<td></td><td>Durchschnitt (ÜK)</td><td>Alle Kürse</td><td>-</td><td>Automatisch</td><td class=" center"><span class="marksingle ' + color + ' ">(' + durchschnitt + ')</span></td><td class=" center">-</td>';
				}
				
				document.querySelector("#schoolMarksTable" + semester + " > tbody").appendChild(row3);
			}
		}, 100);
	}
	
	updateAvreageMark();
}