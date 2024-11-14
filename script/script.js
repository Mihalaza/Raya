function convert() {
  const ratYearsInput = document.getElementById("ratYears");
  const humanYearsInput = document.getElementById("humanYears");

  const ratYears = parseFloat(ratYearsInput.value);
  const humanYears = parseFloat(humanYearsInput.value);

  // Перевірка та конвертація значень
  if (!isNaN(ratYears)) {
    if (ratYears < 0 || ratYears > 4) {
      alert("Введіть від 0 до 4");
      ratYearsInput.value = "";
      return;
    }
    humanYearsInput.value = ((ratYears * 120) / 4).toFixed(1);
  } else if (!isNaN(humanYears)) {
    if (humanYears < 0 || humanYears > 120) {
      alert("Введіть від 0 до 120");
      humanYearsInput.value = "";
      return;
    }
    ratYearsInput.value = ((humanYears * 4) / 120).toFixed(2);
  }
}

function reset() {
  document.getElementById("ratYears").value = "";
  document.getElementById("humanYears").value = "";
}
