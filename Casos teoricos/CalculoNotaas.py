cantidad_estudiantes = int(input("Ingrese cantidad de estudiantes: "))

for i in range(cantidad_estudiantes):

    print(f"\nEstudiante {i + 1}")

    nombre = input("Ingrese nombre: ")

    cantidad_notas = int(input("Ingrese cantidad de notas: "))

    suma = 0

    for j in range(cantidad_notas):

        while True:

            nota = float(input(f"Ingrese nota {j + 1}: "))

            # Validar rango
            if 0 <= nota <= 5:
                suma += nota
                break
            else:
                print("Error: la nota debe estar entre 0 y 5")

    promedio = suma / cantidad_notas

    print(f"Promedio de {nombre}: {promedio:.2f}")

    if promedio >= 3.5:
        print("Estado: APRUEBA")
    else:
        print("Estado: REPRUEBA")