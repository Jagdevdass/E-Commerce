from flask import Flask, render_template

app = Flask(__name__)

# Home Page Route
@app.route('/')
def home():
    return render_template('1_Home_Page.html')

# Login Page Route
@app.route('/login')
def login():
    return render_template('2_Login_Page.html')

@app.route('/forgot')
def forgot():
    return render_template('3_Forgot_Password.html')

@app.route('/signup')
def signup():
    return render_template('4_Signup_Page.html')

@app.route('/cart')
def cart():
    print("Cart Page Loaded...")
    return render_template('5_Cart_Page.html')

if __name__ == '__main__':
    app.run(debug=True)
