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
        super().__init__("Rectangle")
        self.length=length
        self.width=width

    def area(self):
        return self.length*self.width

    def perimeter(self):
        return 2*(self.length+self.width)


r1=rectangle(length=20, width=10)
print("shape name", r1.shape_name)
print("Area is", r1.area())
r1.describe()
r1.display_info()        


