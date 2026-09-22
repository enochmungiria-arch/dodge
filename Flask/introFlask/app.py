from flask import Flask, send_file

app=Flask(__name__)

@app.route('/') #shows that this is the initial route (home section)
def home():
    return "Hello this is home my flask server"

@app.route("/about") #shows that this is the about route
def about():
    return "Hello this is about my flask server"  

@app.route ("/pic")
def get_pic():
    file_path = "Enoch.jpg"
    return send_file(file_path)     

if __name__=="__main__":
    app.run(debug=True)    
