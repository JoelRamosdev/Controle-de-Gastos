const expenses = [
    { value: 18.0, date: "2022-12-01", type: "comida" },
    { value: 13.0, date: "2022-12-02", type: "brincadeira" },
    { value: 15.0, date: "2022-12-03", type: "circo" }
  ];
  
  let totalExpenses = 0;
  
  console.log("Extrato de gastos:");
  expenses.forEach(expense => {
    console.log(`Valor: ${expense.value} | Data: ${expense.date} | Tipo: ${expense.type}`);
    totalExpenses += expense.value;
  });
  
  console.log(`Total de gastos: ${totalExpenses}`);