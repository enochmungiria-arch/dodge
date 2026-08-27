#testing kwargs
#list of kwargs
#the list of kwargs



def myKwargs(**kwargs):
    print("kwargs is ",type(kwargs))
    print(kwargs)
    #print("b is",kwargs)

    #scenario a=23 b=30 =? {a:23,b:30}

    myKwargs(a=23,b=30)

    #scenario bno 3
    #name= "samson" email Samson@gmail.com
    #myKwargs({"name":"Samson"})

    myKwargs(name="Samson",email="Sam@sam.com",dict={"a":"a"})

    def area_rectangle(length,width):
        area = length*width
        print(f"for rectangle with length {length} and width {width} area is {area}")

        area_rectangle(5,2)#args

        width=4
        length=39

        area_rectangle(width,length)#args
        area_rectangle(width=width, length=length)#kwargs

        area_rectangle(width=18, length=55)
        area_rectangle(width=18, length=55)
