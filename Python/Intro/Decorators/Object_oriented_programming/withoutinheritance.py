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
class Rectangle:

    def __init__(self, length, width):
        self.length=length
        self.width=width
        self.shape_name="Rectangle"


    def area(self): 
        area= self.length*self.width
        print(f"For rectangle of length {self.length} and width {self.width} area is {area}")



class Square:
    def __init__(self, side):
        self.length=side 
        self.width=side
        self.shape_name="square"

    def area(self):
        area= self.length*self.width
        print(f"for a square of length {self.length} and width {self.width} the area is {area}")


r1= Rectangle(length=20, width=10)  
r1.area()  




s1=Square(side=10)
s1.area()