import os
import psycopg2 #it acts as an interpreter fot postgresql data since python does not natively understant postgresql data
from psycopg2.extras import RealDictCursor #ift forces python to return data as a real dictionary instead of a tuple, making it easier to work with the data
from contextlib import contextmanager # it allows safely closing of a database connection after the work is done
from dotenv import load_dotenv #it locates a .env file inside your directory and loads the variables inside it into the environment
 
#argument for the path to the .env file 
load_dotenv() 

class Database:
    def __init__(self):
        self.config={
            "dbname":os.getenv("DB_NAME"),
            "user":os.getenv("DB_USER"),
            "password":os.getenv("DB_PASSWORD"),
            "host":os.getenv("HOST"),
            "port":os.getenv("PORT")
        }

    @contextmanager
    def get_cursor(self):
        conn = psycopg2.connect(**self.config)

        cursor = conn.cursor(cursor_factory=RealDictCursor)
        try:
          yield cursor
          conn.commit()
        except Exception as e:
          conn.rollback()
          raise e
        finally:
          cursor.close()
          conn.close()

if __name__ == "__main__" :
    print("testing database connection...")   
    try:
        db=Database()
        with db.get_cursor() as cursor:
            cursor.execute("SELECT NOW() as current_time, version();")
            result=cursor.fetchone()
            print(f"Database connection successful, Current time: {result['current_time']}, version: {result['version']}")
    except Exception as e:
        print(f"Database connection failed: {e}")           