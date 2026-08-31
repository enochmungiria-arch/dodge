def log_deco(func):
    def wrapper(*args,**kwargs):
      print("--------------------------------------")
      print("Args", args)
      print("Kwargs", kwargs)
      result=func(*args, **kwargs)
      print(f"function called was {func.__name__}")
      print("results", result)
      print("--------------------------------------")
    return wrapper

@log_deco
def hello():
     print("Hello world")
     return 123
@log_deco
def sum(a,b):
     ans=a+b
     return ans
sum(a=20,b=30)
sum(1,5)
