# Programa con menú y descuento según tipo de cliente

from datetime import datetime

while True:
    print("\n===== MENÚ =====")
    print("1. Saludar")
    print("2. Mostrar fecha (simulada)")
    print("3. Calcular descuento")
    print("4. Salir")

    opcion = input("Seleccione una opción: ")

    # Opción 1: Saludar
    if opcion == "1":
        nombre = input("Ingrese su nombre: ")
        print(f"Hola, {nombre}. ¡Bienvenido!")

    # Opción 2: Mostrar fecha simulada
    elif opcion == "2":
        fecha_simulada = "07/05/2026"
        print(f"La fecha simulada es: {fecha_simulada}")

    # Opción 3: Tipo de cliente y descuento
    elif opcion == "3":
        print("\nTipo de cliente:")
        print("1 = VIP")
        print("2 = Normal")

        tipo = input("Ingrese el tipo de cliente: ")
        compra = float(input("Ingrese el valor de la compra: "))

        if tipo == "1":
            descuento = compra * 0.20
            total = compra - descuento
            print("Cliente VIP → 20% de descuento")
            print(f"Descuento: ${descuento:.2f}")
            print(f"Total a pagar: ${total:.2f}")

        elif tipo == "2":
            descuento = compra * 0.05
            total = compra - descuento
            print("Cliente Normal → 5% de descuento")
            print(f"Descuento: ${descuento:.2f}")
            print(f"Total a pagar: ${total:.2f}")

        else:
            print("Tipo de cliente no válido.")

    # Opción 4: Salir
    elif opcion == "4":
        print("Saliendo del programa...")
        break

    # Opción inválida
    else:
        print("Opción no válida. Intente nuevamente.")