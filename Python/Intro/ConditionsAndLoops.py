
#indentation in python is necessary 
age = 20



if age >18:
    print("You can drink")
    print("you're legal")
    if age == 23:
        print("you should get married")

    print("you are a free citizen")# the indentation makes the output be of the first if condition

#conditions
#else if-->elif
    
elif age == 44:
      print("You're kinda aged")
else:
      print("last else")


k=0

# while loops=> almost similar to while looops in Javascript
while k<30:
      k=k+1
      print("k is", k)



      #range--> it is a built in python function
      #in js we used to say (for i=o i,ar.length; i++)
      #in py we say:
      for i in range(0,5,1):
          print("I is", i)

      ar=[23, "hello",67,45,40]

      for i in range(0,len(ar)):
          single_item=ar[i]
          print(single_item)

for single_item in ar:
          print("single item",single_item)



#function areaCircle(radius)
# {return 3.142*radius*radius}

#function-->def which is short for define
def area_circle(radius):
    ans= 3.12*pow(radius,2)
    print(f"for circle of radius {radius} area is {ans}")
    return

area_circle(20) 
new_f= area_circle  

new_f(10)






    
