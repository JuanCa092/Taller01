salario = float(input("ingrese salario: "))

if salario < 1500000:
    print("el salario final es:", salario)
elif salario >= 1500000 and salario < 3000000:
    impuesto = salario * 0.10
    salario_neto = salario - impuesto
    print ("el salario final es de:", salario_neto, ("el impuesto es de:"), impuesto)
else:
    impuesto = salario * 0.20
    salario_neto = salario - impuesto
    print ("el salario final es de:", salario_neto, ("el impuesto es de:"), impuesto)
