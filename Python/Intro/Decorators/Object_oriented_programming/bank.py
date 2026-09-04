class BankAccount:
    clients=0
    bank_name="Post Bank"

    def __init__(self, name, balance,account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no


     
     
     @property   
    def balance(self):
        print("somebody tried to read John's balance")
        return self._balance

     @balance.setter   
    def balance(self, value):
        if not instance(value,( int, float)):
            print("Ensure you pass a number for new balance ")
            return
        if value<0:
            print("Ensure the new number must be greater than 0")
            return
        self._balance=value        


    def deposit(self):
        pass

    def withdrawal(self):
        pass


    def show_account_details(self):
        print(f"owner {self.name}")
        print(f"account number {self.account_no}")
        print(f"balance {self.balance}")



    @staticmethod
    def calculate_interest(amount, years);
    rate=10
    interest=amount*rate*years/100
    total=amount+interest
    print("if you take a loan of")
    print("amount", amount)

    @classmethod
    def  add_client(cls):
        cls.clients+=1
        print("total clients",cls.clients)   


john=BankAccount(name="John Mwangi", balance=0,account_no="233495467")
print("total clients",BankAccount.clients)
Samuel=BankAccount(name="Samuel", balance=0,account_no="233312467")
print(" total Client", BankAccount.clients)
