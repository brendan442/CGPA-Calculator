function gradeCalc(grade, unit) {
    if (grade === "A") {
      return 4 * unit;
    } else if (grade === "AB") {
      return 3.5 * unit;
    } else if (grade === "B") {
      return 3 * unit;
    } else if (grade === "BC") {
      return 2.5 * unit;
    } else if (grade === "C") {
      return 2 * unit;
    } else if (grade === "CD") {
      return 0 * unit;
    } else if (grade === "D") {
      return 0 * unit;
    } else if (grade === "E") {
      return 0 * unit;
    } else if (grade === "F") {
      return 0 * unit;
    }
  }
  
  /* function to add course */
  let counter = 0;
  
  function addCourse() {
    let addNew = document.createElement("div");
    addNew.classList.add("add_new", `key-${counter}`);
  
    const course_name = `
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
      <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
      <select class="grade key-${counter}" required>
        <option value="select">Select</option>
        <option class="grade" value="4">A</option>
        <option class="grade" value="3.5">AB</option>
        <option class="grade" value="3">B</option>
        <option class="grade" value="2.5">BC</option>
        <option class="grade" value="2">C</option>
        <option class="grade" value="0">CD</option>
        <option class="grade" value="0">D</option>
        <option class="grade" value="0">E</option>
        <option class="grade" value="0">F</option>
      </select>
    `;
    addNew.innerHTML = course_name;
    document.getElementById("course-wrapper").appendChild(addNew);
    counter++;
  }
  
  /* function to remove course */
  function removeCourse() {
    let mainForm = document.querySelector("div.add_new");
    mainForm.remove();
  }
  
  const reports = [];
  
  /* description calculates CGPA */
  function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
    const listofGrades = [];
    const listofUnits = [];
    let totalUnits = 0;
  
    GRADESSELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const gradeValue = GRADES[selectedIndex].text.toUpperCase();
      listofGrades.push(gradeValue);
    });
    console.log(listofGrades);
  
    UNIT.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue;
      listofUnits.push(unitValue);
    });
    console.log(listofUnits);
  
    let totalEarnedUnits = 0;
  
    for (let i = 0; i < listofUnits.length; i++) {
      totalEarnedUnits += gradeCalc(listofGrades[i], listofUnits[i]);
    }
  
    const gpa = totalEarnedUnits / totalUnits;
  
    if (gpa >= 0) {
      CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);
    } else {
      CGPAPARAGRAPH.textContent = "Please Enter Your Correct Grade and Credit Units";
    }
  }
  