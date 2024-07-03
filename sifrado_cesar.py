



class CifradoCesar:
    max_letter = 26
    list_letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",]
    dictionary = {"a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7, "i":8, "j":9,
                   "k":10, "l":11, "m":12, "n":13, "o":14, "p":15, "q":16, "r":17, "s":18, "t":19, "u":20, "v":21, "w":22, "x":23, "y":24, "z":25,
"A":26,
"B":27,
"C":28,
"D":29,
"E":30,
"F":31,
"G":32,
"H":33,
"I":34,
"J":35,
"K":36,
"L":37,
"M":38,
"N":39,
"O":40,
"P":41,
"Q":42,
"R":43,
"S":44,
"T":45,
"U":46,
"V":47,
"W":48,
"X":49,
"Y":50,
"Z":51,
                   
                   
                   
                   
                   }

    def __init__(self, key:int) -> None:
        assert 0<key<CifradoCesar.max_letter , 'numbers between 0 and 26'
        self.key = key


    def encrypt(self, text:str)->str:
        return CifradoCesar.encrypt_with_key(self.key, text)

    def decrypt(self, text:str)->str:
        return CifradoCesar.decrypt_with_key(self.key, text)


    @staticmethod
    def try_descrypt(text:str)->list[str]:
        list_descript = []
        for i in range(26):
            list_descript.append(CifradoCesar.decrypt_with_key(i, text))
        return list_descript

    @staticmethod
    def encrypt_with_key(key:int, text:str)->str:
        new_text = ''
        for i in text:
            if i==" ":
                new_text += " "
                continue
            if i.isupper():
                des = CifradoCesar.dictionary[i]+key
                if des >= CifradoCesar.max_letter*2:
                    des = des - CifradoCesar.max_letter
                new_text +=  CifradoCesar.list_letter[des]
            else:
                des = CifradoCesar.dictionary[i]+key
                if des >= CifradoCesar.max_letter:
                    des = des - CifradoCesar.max_letter 
                new_text +=  CifradoCesar.list_letter[des]
        return new_text

    @staticmethod
    def decrypt_with_key(key:int, text:str)->str:
        return CifradoCesar.encrypt_with_key(-key, text)
        new_text = ''
        for i in text:
            if i==" ":
                new_text += " "
                continue
            if i.isupper():
                des = CifradoCesar.dictionary[i]-key
                if des < CifradoCesar.max_letter:
                    des = CifradoCesar.max_letter + des
                new_text +=  CifradoCesar.list_letter[des]
            else:
                des = CifradoCesar.dictionary[i]-key
                if des < 0:
                    des = CifradoCesar.max_letter + des
                new_text +=  CifradoCesar.list_letter[des]
        return new_text
        

def prueba():

    cifrado = CifradoCesar(16)

    a = cifrado.encrypt("este mensaje esta encriptado con cesar")
    b = cifrado.decrypt(a)

    pocibles_mensajes = CifradoCesar.try_descrypt(b)
    print(a)
    print(b)
    print(pocibles_mensajes)


cifrado = CifradoCesar(3)


a = cifrado.encrypt("ABCabc  XYZxyz")
b = cifrado.decrypt(a)

print(a)
print(b)
