
class Inventory:
    def __init__ (self, db):
        self.db=db

    def create_table(self):
     
     query="""
        CREATE TABLE IF NOT EXISTS inventory (
          id SERIAL PRIMARY KEY,
          name VARCHAR(250) NOT NULL,
          qty integer NOT NULL,
          buying_price integer NOT NULL,
          selling_price integer NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
     """
     with self.db.get_cursor() as cursor:
        cursor.execute(query)
        print("Inventory table created successfully.")

    def add_item(self, name,qty, buying_price, selling_price):
        query = """
        INSERT INTO inventory (name, qty, buying_price, selling_price)
        VALUES (%s, %s, %s, %s);
        """
        with self.db.get_cursor() as cursor:
            cursor.execute(query, (name, qty, buying_price, selling_price))
            print(f"Item '{name}' added to inventory successfully.")


    def get_all_items(self):
        query = "SELECT * FROM inventory;"
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            items = cursor.fetchall()
            return items  

if __name__ == "__main__":
     from db import Database
     db = Database() 
     inventory = Inventory(db)
     inventory.create_table()
     inventory.add_item("Item1", 16, 5, 10)
     items = inventory.get_all_items()
     print(items)

