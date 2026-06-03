numeros = [12, 45, 7, 89, 23]

buscar = int(input("Número a buscar: "))

if buscar in numeros:
    print("Posición:", numeros.index(buscar))
else:
    print("El número no existe.")