"""
Inheritance
can extend a class .
->a class inherits methodsand properties of another class.
->do not repeat
-----------------------------------------------------------------
Biology classification
---------------------------------------------------------------------------
sgapes
reclangle and square >triangle>
---------------------------------------------
"""


class shape:
    def __init__(self, shape_name):
        self.shape_name=shape_name

    def describe(self):
        print(f"This is a {self.shape_name}")

    def display_info(self):
        print("--------------------------------------")
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("---------------------------------------")

class rectangle(shape):
    def __init__(self, length, width):
        super().__init__(shape_name="Rectangle")
        self.length=length
        self.width=width

    def area(self):
        return self.length*self.width

    def perimeter(self):
        return 2*(self.length+self.width)


class Triangle(shape):
    def __init__(self, base, height):
        super().__init__(shape_name="Triangle")
        

 class Square(reactangle):
    def __init__(self, side):
        super().__init__(length=side, width=side)
        self.shape_name="Square"      


s1=Square(side=10)

print("shape name", s1.shape_name)
print("Area is", s1.area())
s1.describe()
s1.display_info() 



t1=Triangle(20,32)
t1.area()



