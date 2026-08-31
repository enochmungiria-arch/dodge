""""
Decorators are powerful tools for modifying or extending the behavior of functions or methods without changing 
their code.
""""
""""
A decorator function should take another function  as an
argument or parameter. It should have a wrapper function.
This function should be able to call the passed function
To use a decorator you use  a decorator function before function definition

""""
def my_deco(func):
    def wrapper ():
        print("Before we call the function")
        func()
        print("After we call the function")
     return wrapper

    def hello():
        print("Hello world function executes")  
        print("Hello World")


    @my_deco
    def french _hello():
        print("French Hello Function")
        print("Bonjour World")   

    french_hello()      