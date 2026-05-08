edad = int(input("Ingrese su edad: "))

if edad >= 0 and edad <= 12:
    print("Eres un niño.")

elif edad >= 13 and edad <= 17:
    print("Eres un adolescente.")

elif edad >= 18 and edad <= 59:
    print("Eres un adulto.")

elif edad >= 60:
    print("Eres un adulto mayor.")