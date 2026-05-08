num1 = float(input("ingrese el primer numero"))
num2 = float(input("ingrese el segundo numero"))

print("Suma",num1+num2)
print("Resta", num1 - num2)
print("Multiplicacion", num1 * num2)

if num2 != 0:
    print("División:", num1 / num2)
else:
    print("ERROR, no se puede dividir entre 0")