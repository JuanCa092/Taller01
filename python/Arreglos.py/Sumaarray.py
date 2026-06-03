import random

N = 10
numeros = [random.randint(1, 100) for _ in range(N)]

print("Arreglo:", numeros)
print("Suma:", sum(numeros))