class BankAccount:

    def __init__(self, name, balance,account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no


    def get_balance(self):
        pass

    def deposit(self):
        pass

    def withdrawal(self):
        pass


    def show_account_details(self):
        print(f"owner {self.name}")
        print(f"account number {self.account_no}")
        print(f"balance {self.balance}")


john=BankAccount(name="John Mwangi", balance=0,account_no="233495467")

john.show_account_details()

