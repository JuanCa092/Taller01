numeros = [12, 45, 7, 89, 23, 8, 10]

pares = 0

for numero in numeros:
    if numero % 2 == 0:
        pares += 1

print("Cantidad de pares:", pares)