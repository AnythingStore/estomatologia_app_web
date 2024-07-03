



def sifrar(key:int, text:str):
    new_text = ''
    for i in text:
        if i.isupper():
            new_text += chr((ord(i)-65+key)%26 +65)
            print(key)
            print(ord(i))
            print(ord(i)-65)
            print((ord(i)-65+key))
            print((ord(i)-65+key)%26)
            print((ord(i)-65+key)%26 +65)
            print(chr((ord(i)-65+key)%26 +65))
            print('__')
        elif i.islower():
            new_text += chr((ord(i)-97+key)%26+97)
        else:
            new_text +=i
    return new_text

def desifrar(key:int, text:str):
    return sifrar(-key, text)

print(sifrar(23, "Mensaje encriptado"))
print(desifrar(23, sifrar(23, "Mensaje encriptado")))


