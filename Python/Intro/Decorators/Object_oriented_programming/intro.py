class House:
    bedrooms=3
    bathrooms=2
    floors=1
    area=120
    owner=""
    location=""
    architect="Kimani"


    def configure_house(self, bedrooms, bathrooms, floors, area):
        self.bedrooms=bedrooms
        self.location=location
        

    def print_self(self):
        print(self)
        print(self.__dict__)    

macrine_house=House()
macrine_house.owner="Macrine"
macrine_house.location="kikuyu"  
print(f"Macrine House Owner: {macrine_house.owner}")  
print(f"Macrine House Location: {macrine_house.location}")
print(f"Macrine House Architect: {macrine_house.architect}")
print(f"Macrine House Bedrooms: {macrine_house.bedrooms}")
print(f"Macrine House Bathrooms: {macrine_house.bathrooms}")
print(f"Macrine House Floors: {macrine_house.floors}")
print(f"Macrine House Area: {macrine_house.area}")

daniel_house=House()
daniel_house.owner="Daniel"
daniel_house.location="Nairobi"
print(f"Daniel House Owner: {daniel_house.owner}")
print(f"Daniel House Location: {daniel_house.location}")
print(f"Daniel House Architect: {daniel_house.architect}")
print(f"Daniel House Bedrooms: {daniel_house.bedrooms}")
print(f"Daniel House Bathrooms: {daniel_house.bathrooms}")
print(f"Daniel House Floors: {daniel_house.floors}")
print(f"Daniel House Area: {daniel_house.area}")
    